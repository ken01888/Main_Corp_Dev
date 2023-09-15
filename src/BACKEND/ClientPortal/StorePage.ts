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

router.post('/insertInventoryItems', async (req: any, res) => {


    const weightGrams = convert(req.body.total_package_weight.unit).from(req.body.total_package_weight.weight).to('g')
    req.body.price_per_gram = req.body.price / weightGrams
    req.body.total_package_weight = weightGrams


    const current_store = await stores.insertInventoryItem(req.body)
    res.json(current_store)
});

router.put('/updateInventoryItem',

    async (req, res) => {
        const getProducts = await stores.getInventoryItemsforRecording(req.body.id)

        if (req.body.values.total_package_weight && !req.body.values.price) {
            const weightGrams = convert(req.body.values.total_package_weight.unit).from(req.body.values.total_package_weight.weight).to('g')
            const price_per_gram = Number(getProducts[0].price/ weightGrams)
            req.body.values.price_per_gram = Number(price_per_gram).toFixed(2)
            req.body.values.total_package_weight = weightGrams
            const current_store: any = await stores.updateInventoryItem(req.body.values, req.body.id)
            res.json(current_store)


        }else if (!req.body.values.total_package_weight && req.body.values.price ){
            
            const price_per_gram = Number(req.body.values.price/ getProducts[0].total_package_weight)
            req.body.values.price_per_gram = Number(price_per_gram).toFixed(2)
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


export default router; 