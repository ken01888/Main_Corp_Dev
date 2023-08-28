import * as express from 'express'
import 'dotenv/config'
import stores from '../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory';
import verify from '../ProgramControlFlow/SQL/Query.ts/Security/Verification'
import * as convert from 'convert-units'




const router = express.Router()


router.post('/createStore', async (req: any, res) => {
    const store = await stores.createStore(req.body)
    res.json('hello')
});


router.post('/insertInventoryItems', async (req: any, res) => {

    console.log(req)
    const weightGrams = convert(req.body.total_package_weight.unit).from(req.body.total_package_weight.weight).to('g')
    req.body.price_per_gram = req.body.price / weightGrams
    req.body.total_package_weight = req.body.total_package_weight.unit


    const current_store = await stores.insertInventoryItem(req.body)
    res.json(current_store)
});

router.get('/getInventoryItems', async (req: any, res) => {


    //    let business_id = req.cookies.user.id
    let business_id = 80

    const resultInventory = await stores.getInventoryItems(business_id)

    res.json(resultInventory)
});


router.delete('/deleteInventoryItems', async (req: any, res) => {
    const current_store: any = await stores.deleteInventoryItem(req.body)
    res.json(current_store.affectedRows)

});

router.put('/updateInventoryItem',

    async (req, res, next) => {
        const getProducts = await stores.getInventoryItemsforRecording(req.body.id)
        if (req.body.values.price && req.body.values.total_package_weight !== undefined) {
            const weightGrams = convert(req.body.values.total_package_weight).from('lb').to('g')
            console.log('here at middle ware 1')

            const price_per_gram = Number(req.body.values.price / weightGrams).toFixed(2)
            req.body.values.price_per_gram = price_per_gram
            const current_store: any = await stores.updateInventoryItem(req.body.values, req.body.id)
            res.json(current_store)
        } else {
            next()
        }
    },

    async (req: any, res) => {
        const newData = Object.entries(req.body.values)
        const getProducts = await stores.getInventoryItemsforRecording(req.body.id)
        console.log(getProducts)
        const newMap = newData.forEach(async (i: any, n, a) => {

            if ((i[0] === 'price' && i[1] != getProducts[0].price || undefined)) {
                const weightGrams = convert(getProducts[0].total_package_weight).from('lb').to('g')
                const price_per_gram = i[1] / weightGrams
                req.body.values.price_per_gram = Number(price_per_gram).toFixed(2)
                const current_store: any = await stores.updateInventoryItem(req.body.values, req.body.id)

                res.json(current_store)
            } else if (i[0] === 'total_package_weight' && i[1] != getProducts[0].total_package_weight || undefined) {
                console.log('here at middle ware 3')
                const weightGrams = convert(i[1]).from('lb').to('g')
                const price_per_gram = getProducts[0].price / weightGrams
                req.body.values.price_per_gram = Number(price_per_gram).toFixed(2)
                const current_store: any = await stores.updateInventoryItem(req.body.values, req.body.id)
                res.json(current_store)

            } 

        })



        // const current_store: any = await stores.updateInventoryItem(req.body.values, req.body.id)


        // res.json(current_store)


    });




//Checklist Routes

router.get('/getInventoryItemsForDailyChecklist/:id', async (req, res) => {
    const business_id = req.params.id
    const newReply = await stores.getInventoryChecklistItems(business_id)
    res.json(newReply)

});

router.post('/insertInventoryChecklistItems', async (req: any, res) => {
    req.body.order_quantity = req.body.recommended_stock_level - req.body.in_stock

    if (req.body.order_quantity <= 0) {
        req.body.order_quantity = 0
    }
    delete req.body.recommended_stock_level
    const newReply = await stores.insertInventoryChecklistItems(req.body)
    res.json(newReply)
});

router.post('/verify_associate_pin', async (req: any, res) => {

    const [newReply, error] = await verify.associateVerification(req.body.pin, req.body.id)


    if (newReply) {
        res.json(true)
    } else if (!newReply) {
        res.json(false)
    }


});

router.get('/inventory_reference_information', async (req: any, res) => {
    // let id = req.cookies.user.id
    let business_id = 80
    let date_of_audit = 'Sunday, July 30, 2023'

    const reply = await stores.getInventoryReference(business_id, req.query.auditDate)
    res.json(reply)
});

router.delete('/deleteInventoryAuditItems', async (req: any, res) => {
    const current_store: any = await stores.deleteInventoryAuditItem(req.body)
    res.json(current_store.affectedRows)

});



router.put('/updateInventoryAuditItem', async (req: any, res) => {
    const current_store: any = await stores.updateInventoryAuditItem(req.body.values, req.body.id)
    res.json(current_store)

});

router.get('/inventoryPeriod', async (req, res) => {
    const inventory_period = await stores.selectUniqueInventoryPeriod()
    res.json(inventory_period)
})



// Add Nutrition Information

router.put('/addNutritionInformation', async (req, res) => {
    req.body.values.serving_size = convert(req.body.values.serving_size.amount).from(req.body.values.serving_size.unit).to('g')
    req.body.values.calories = req.body.values.calories.amount
    req.body.values.total_fat = convert(req.body.values.total_fat.amount).from(req.body.values.total_fat.unit).to('g')
    req.body.values.saturated_fat = convert(req.body.values.saturated_fat.amount).from(req.body.values.saturated_fat.unit).to('g')
    req.body.values.trans_fat = convert(req.body.values.trans_fat.amount).from(req.body.values.trans_fat.unit).to('g')
    req.body.values.cholesterol = convert(req.body.values.cholesterol.amount).from(req.body.values.cholesterol.unit).to('mg')
    req.body.values.sodium = convert(req.body.values.sodium.amount).from(req.body.values.sodium.unit).to('mg')
    req.body.values.carbohydrates = convert(req.body.values.carbohydrates.amount).from(req.body.values.carbohydrates.unit).to('g')
    req.body.values.fiber = convert(req.body.values.fiber.amount).from(req.body.values.fiber.unit).to('g')
    req.body.values.sugar = convert(req.body.values.sugar.amount).from(req.body.values.sugar.unit).to('g')
    req.body.values.protein = convert(req.body.values.protein.amount).from(req.body.values.protein.unit).to('g')
    req.body.values.calcium = convert(req.body.values.calcium.amount).from(req.body.values.calcium.unit).to('mg')
    req.body.values.iron = convert(req.body.values.iron.amount).from(req.body.values.iron.unit).to('mg')
    req.body.values.potassium = convert(req.body.values.potassium.amount).from(req.body.values.potassium.unit).to('mg')
    req.body.values.added_sugar = convert(req.body.values.added_sugar.amount).from(req.body.values.added_sugar.unit).to('g')
    req.body.values.vitamin_d = convert(req.body.values.vitamin_d.amount).from(req.body.values.vitamin_d.unit).to('mcg')
    const addedNewNutritionItem = await stores.insertNutritionalInformation(req.body.values, req.body.id)
    res.json(addedNewNutritionItem)
})


router.post('/insertProductName', async (req, res) => {
    req.body.business_id = 80
    const insertProduct = await stores.insertProductRecipeName(req.body)

    res.json('hello')
});

router.get('/getRecipeProduct', async (req, res) => {

    const business_id = 80;
    const getProducts = await stores.getRecipeProduct(business_id);
    const newProduct = await getProducts.map(async (i, n, a) => {
        const getInfo = await stores.sumOfAllIngredients(i.id)
        if (getInfo[0]['sum(input_cost)'] === null) {
            return stores.insertInputItemMeta(0, 0, 0, i.id)
        } else if (getInfo[0]['sum(input_cost)'] !== null || undefined) {
            const getProducts_2 = await stores.getIngredientCount(i.id);
            const data_2 = await stores.totalInputWeight(i.id)
            return stores.insertInputItemMeta(getInfo[0]['sum(input_cost)'], getProducts_2[0]['COUNT(inventory_item_id)'], data_2[0]['sum(input_weight)'], i.id)
        }
        return i
    });
    const getProducts_1 = await stores.getRecipeProduct(business_id);



    // const getInfo = await stores.sumOfAllIngredients(req.body.inputs[0].product_id)





    // const productReturned = await stores.sumOfAllIngredients(req.body.inputs[0].product_id) 
    // const data = await stores.sumOfAllIngredients(req.body.inputs[0].product_id)


    // const data = await stores.sumOfAllIngredients(req.body.inputs[0].product_id)
    // const costUpload = await stores.insertInputItemCost(data[0]['sum(input_cost)'], req.body.inputs[0].product_id)

    res.json(getProducts_1)

})

router.get('/inventoryItemsForSelectRecipes', async (req, res) => {
    let business_id = 80
    const getProducts = await stores.getInventoryItemsforSelect(business_id)
    const selectItem = getProducts.map((i, n, a) => {
        return {
            value: i.id,

            label: i.description

        }
    })
    res.json(selectItem)
})


router.post('/insertProductInputs', async (req, res) => {
    let business_id = 80

    const dataExhange = await req.body.inputs.forEach(async (i, n, a) => {
        i.input_weight = convert(i.input_weight).from(i.unit).to('g')
        const getProducts: any = await stores.getInventoryItemsforRecording(i.inventory_item_id)
        i.input_cost = parseInt(i.input_weight) * getProducts[0].price_per_gram
        delete i.unit
        await stores.insertIngredients(i, req.body.inputs.product_id)
    })

    const data = await stores.sumOfAllIngredients(req.body.inputs[0].product_id)
    const data_1 = await stores.getIngredientCount(req.body.inputs[0].product_id)

    const data_2 = await stores.totalInputWeight(req.body.inputs[0].product_id)
    console.log(data_2)

    const costUpload = await stores.insertInputItemMeta(data[0]['sum(input_cost)'], data_1[0]['COUNT(inventory_item_id)'], data_2[0]['sum(input_weight)'], req.body.inputs[0].product_id)
    res.json(costUpload)
});

router.delete('/deleteProduct', async (req: any, res: any) => {

    const current_product: any = await stores.deleteProduct(req.body[0])

    const current_product_inputs: any = await stores.deleteInput(req.body[0])


    res.json('success')

});




export default router; 