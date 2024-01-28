import * as express from 'express'
import 'dotenv/config'
import stores from '../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory';
import verify from '../ProgramControlFlow/SQL/Query.ts/Security/Verification'
import * as convert from 'convert-units'
import { json } from 'stream/consumers';
const router = express.Router()




router.get('/getInventoryItems', async (req: any, res) => {
    const resultInventory = await stores.getInventoryItems(req.cookies.user.id)
    res.json(resultInventory)
});

router.post('/insertNewInventoryItems', async (req: any, res) => {

    req.body.business_id = req.cookies.user.id
    const weightGrams = convert(req.body.total_package_weight.unit).from(req.body.total_package_weight.weight).to('g')
    req.body.price_per_gram = Number(req.body.price / weightGrams).toFixed(4)
    req.body.total_package_weight = weightGrams
    const current_store = await stores.insertInventoryItem(req.body)
    res.json(current_store)
});

router.put('/updateInventoryItem',
    async (req, res) => {
        const getProducts = await stores.getInventoryItemsforRecording(req.body.id)
        if (req.body.values.total_package_weight && !req.body.values.price) {
            const weightGrams = convert(req.body.values.total_package_weight.unit).from(req.body.values.total_package_weight.weight).to('g')
            const price_per_gram = Number(getProducts[0].price / weightGrams)
            req.body.values.price_per_gram = Number(price_per_gram).toFixed(4)
            req.body.values.total_package_weight = weightGrams
            const current_store: any = await stores.updateInventoryItem(req.body.values, req.body.id)
            res.json(current_store)
        } else if (!req.body.values.total_package_weight && req.body.values.price) {
            const price_per_gram = Number(req.body.values.price / getProducts[0].total_package_weight)
            req.body.values.price_per_gram = Number(price_per_gram).toFixed(4)
            const current_store: any = await stores.updateInventoryItem(req.body.values, req.body.id)
            res.json(current_store)
        } else {
            const current_store: any = await stores.updateInventoryItem(req.body.values, req.body.id)
            res.json(current_store)
        }

    })




router.delete('/deleteInventoryItems', async (req: any, res) => {
    const current_store: any = await stores.deleteInventoryItem(req.body)
    res.json(current_store.affectedRows)
});


router.put('/addNutritionInformation', async (req, res) => {
    const divider = 1 / req.body.values.serving_size.amount
    req.body.values.calories = req.body.values.calories.amount * divider
    req.body.values.total_fat = ((convert(req.body.values.total_fat.amount).from(req.body.values.total_fat.unit).to('g')) * divider)
    req.body.values.saturated_fat = convert(req.body.values.saturated_fat.amount).from(req.body.values.saturated_fat.unit).to('g') * divider
    req.body.values.trans_fat = convert(req.body.values.trans_fat.amount).from(req.body.values.trans_fat.unit).to('g') * divider
    req.body.values.cholesterol = convert(req.body.values.cholesterol.amount).from(req.body.values.cholesterol.unit).to('mg') * divider
    req.body.values.sodium = convert(req.body.values.sodium.amount).from(req.body.values.sodium.unit).to('mg') * divider
    req.body.values.carbohydrates = convert(req.body.values.carbohydrates.amount).from(req.body.values.carbohydrates.unit).to('g') * divider
    req.body.values.fiber = convert(req.body.values.fiber.amount).from(req.body.values.fiber.unit).to('g') * divider
    req.body.values.sugar = convert(req.body.values.sugar.amount).from(req.body.values.sugar.unit).to('g') * divider
    req.body.values.protein = convert(req.body.values.protein.amount).from(req.body.values.protein.unit).to('g') * divider
    req.body.values.calcium = convert(req.body.values.calcium.amount).from(req.body.values.calcium.unit).to('mg') * divider
    req.body.values.iron = convert(req.body.values.iron.amount).from(req.body.values.iron.unit).to('mg') * divider
    req.body.values.potassium = convert(req.body.values.potassium.amount).from(req.body.values.potassium.unit).to('mg') * divider
    req.body.values.added_sugar = convert(req.body.values.added_sugar.amount).from(req.body.values.added_sugar.unit).to('g') * divider
    req.body.values.vitamin_d = convert(req.body.values.vitamin_d.amount).from(req.body.values.vitamin_d.unit).to('mcg') * divider
    req.body.values.allergies = JSON.stringify(req.body.values.allergies)
    req.body.values.serving_size = req.body.values.serving_size.amount
    const addedNewNutritionItem = await stores.insertNutritionalInformation(req.body.values, req.body.id)
    res.json(addedNewNutritionItem)
})


export default router; 