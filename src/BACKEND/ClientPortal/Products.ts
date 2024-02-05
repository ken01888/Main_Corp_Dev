import * as express from 'express'
import 'dotenv/config'
import stores from '../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory';
import verify from '../ProgramControlFlow/SQL/Query.ts/Security/Verification'
import * as convert from 'convert-units'
import { json } from 'stream/consumers';




const router = express.Router()


router.get('/getRecipeProduct', async (req, res) => {
    const getProducts = await stores.getRecipeProduct(req.cookies.user.id);
    getProducts.map(async (i, n, a) => {
        const getInputs = await stores.getInputForUpdate(i.id)
         getInputs.map(async (i,n,a)=>{
            const newReply = await stores.UpdateProductInputs(i, i.id)
        })
        const productMeta = await stores.inputNutritionalInformation(i.id)
        stores.insertInputItemMeta(productMeta[0], i.id)
        return i
    });
    const getProducts_1 = await stores.getRecipeProduct(req.cookies.user.id);
    console.log(getProducts_1)


    res.json(getProducts_1)
})

router.get('/inventoryItemsForSelectRecipes', async (req, res) => {
    const getProducts = await stores.getInventoryItemsforSelect(req.cookies.user.id)
    const selectItem = getProducts.map((i, n, a) => {
        return {
            value: i.id,
            label: i.description,
            price_per_gram: i.price_per_gram

        }
    })
    res.json(selectItem)
})


router.post('/insertProductName', async (req: any, res: any) => {
    req.body.business_id = req.cookies.user.id
    req.body.serving_size = convert(req.body.serving_size.amount).from(req.body.serving_size.unit).to('g')
    const insertProduct = await stores.insertProductRecipeName(req.body)
    res.json('hello')
});



router.post('/insertProductInputs', async (req, res) => {
    const dataExhange = await req.body.inputs.forEach(async (i, n, a) => {
        i.input_weight = convert(i.input_weight).from(i.unit).to('g')
        const getProducts: any = await stores.getInventoryItemsforRecording(i.inventory_item_id)
        i.input_cost = parseInt(i.input_weight) * getProducts[0].price_per_gram
        i.calories = parseInt(i.input_weight) * getProducts[0].calories
        i.total_fat = parseInt(i.input_weight) * getProducts[0].total_fat
        i.saturated_fat = parseInt(i.input_weight) * getProducts[0].saturated_fat
        i.trans_fat = parseInt(i.input_weight) * getProducts[0].trans_fat
        i.cholesterol = parseInt(i.input_weight) * getProducts[0].cholesterol
        i.sodium = parseInt(i.input_weight) * getProducts[0].sodium
        i.carbohydrates = parseInt(i.input_weight) * getProducts[0].carbohydrates
        i.fiber = parseInt(i.input_weight) * getProducts[0].fiber
        i.sugar = parseInt(i.input_weight) * getProducts[0].sugar
        i.added_sugar = parseInt(i.input_weight) * getProducts[0].added_sugar
        i.protein = parseInt(i.input_weight) * getProducts[0].protein
        i.calcium = parseInt(i.input_weight) * getProducts[0].calcium
        i.iron = parseInt(i.input_weight) * getProducts[0].iron
        i.potassium = parseInt(i.input_weight) * getProducts[0].potassium
        i.vitamin_d = parseInt(i.input_weight) * getProducts[0].vitamin_d
        delete i.unit
        await stores.insertIngredients(i, req.body.inputs.product_id)
    })
    const data_3 = await stores.inputNutritionalInformation(req.body.inputs[0].product_id)
    stores.insertInputItemMetaFull(data_3[0], req.body.inputs[0].product_id)
    res.json('costUpload')
});



router.put('/updateProductInformation', async (req: any, res) => {
    if (req.body.values.serving_size.amount == undefined && req.body.values.serving_size.unit == undefined && req.body.values.product_name == undefined && req.body.values.sales_price == undefined && req.body.values.units == undefined) {
        res.json({ affectedRows: 1 })
    } else if (req.body.values.serving_size.amount == undefined || req.body.values.serving_size.unit == undefined) {
        delete req.body.values.serving_size
        const current_store: any = await stores.UpdateProduct(req.body.values, req.body.id)
        res.json(current_store)
    } else {
        const weightGrams = convert(req.body.values.serving_size.amount).from(req.body.values.serving_size.unit).to('g')
        req.body.values.serving_size = weightGrams
        const current_store: any = await stores.UpdateProduct(req.body.values, req.body.id)
        res.json(current_store)
    }
});

router.delete('/deleteProduct', (req: any, res: any) => {
    stores.deleteProduct(req.body[0])
    stores.deleteInput(req.body[0])
    res.json('success')
});

router.get('/allProductInputs', async (req, res) => {
    const getInputs = await stores.selectAllInputs(req.query.product_id)
    res.json(getInputs)
})


router.put('/updateInputs', (req, res) => {

    Object.values(req.body).map(async (i: any, n, a) => {

        try {
            const getProducts: any = await stores.getInventoryItemsforRecording(i.inventory_item_id)
            const input_weight = convert(Number(i.amount)).from(i.unit).to('g')
            const input_cost = i.price_per_gram * input_weight
            i.input_weight = input_weight
            i.input_cost = input_cost
            i.calories = parseInt(i.input_weight) * getProducts[0].calories
            i.total_fat = parseInt(i.input_weight) * getProducts[0].total_fat
            i.saturated_fat = parseInt(i.input_weight) * getProducts[0].saturated_fat
            i.trans_fat = parseInt(i.input_weight) * getProducts[0].trans_fat
            i.cholesterol = parseInt(i.input_weight) * getProducts[0].cholesterol
            i.sodium = parseInt(i.input_weight) * getProducts[0].sodium
            i.carbohydrates = parseInt(i.input_weight) * getProducts[0].carbohydrates
            i.fiber = parseInt(i.input_weight) * getProducts[0].fiber
            i.sugar = parseInt(i.input_weight) * getProducts[0].sugar
            i.added_sugar = parseInt(i.input_weight) * getProducts[0].added_sugar
            i.protein = parseInt(i.input_weight) * getProducts[0].protein
            i.calcium = parseInt(i.input_weight) * getProducts[0].calcium
            i.iron = parseInt(i.input_weight) * getProducts[0].iron
            i.potassium = parseInt(i.input_weight) * getProducts[0].potassium
            i.vitamin_d = parseInt(i.input_weight) * getProducts[0].vitamin_d
            const inputId = i.id
            const product_id = i.product_id
            delete i.id
            delete i.product_id
            delete i.price_per_gram
            delete i.description
            delete i.amount
            delete i.unit
            const newReply = await stores.UpdateProductInputs(i, inputId)
            const productMeta = await stores.inputNutritionalInformation(product_id)

            const newReply2 = await stores.insertInputItemMeta(productMeta[0], product_id)
        } catch (error) {
            return error
        }
    })
    const affectedRows = 1
    res.json(affectedRows)


})


router.delete('/deleteInputs', async (req, res) => {

    const current_product_inputs: any = await stores.deleteInputMeta(req.body[0])

    res.json(current_product_inputs)
})


















router.get('/getNutrients/:id', async (req, res) => {
    const business_id = req.params.id

    const getProducts = await stores.getRecipeProduct(business_id);
    getProducts.map(async (i, n, a) => {
        const getInputs = await stores.getInputForUpdate(i.id)
         getInputs.map(async (i,n,a)=>{
            const newReply = await stores.UpdateProductInputs(i, i.id)
        })
        const productMeta = await stores.inputNutritionalInformation(i.id)
        stores.insertInputItemMeta(productMeta[0], i.id)
        return i
    });
    const getProducts_1 = await stores.getRecipeProduct(business_id);

    res.json(getProducts_1)
})

export default router; 