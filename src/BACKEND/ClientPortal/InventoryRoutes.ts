import * as express from 'express'
import 'dotenv/config'
import stores from '../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory';
import { reservationsUrl } from 'twilio/lib/jwt/taskrouter/util';



const router = express.Router()


router.post('/createStore', async (req: any, res) => {
    const store = await stores.createStore(req.body)
    res.json('hello')
});


router.post('/insertInventoryItems', async (req: any, res) => {
    console.log(req.body)
    const current_store = await stores.insertInventoryItem(req.body)
    res.json(current_store)

});

router.get('/getInventoryItems', async (req: any, res) => {
   let business_id = req.user.id
    const resultInventory = await stores.getInventoryItems(business_id)
    

    res.json(resultInventory)
});


router.delete('/deleteInventoryItems', async (req: any, res) => {
    const current_store: any = await stores.deleteInventoryItem(req.body)
    res.json(current_store.affectedRows)

});

router.put('/updateInventoryItem', async (req: any, res) => {
    const current_store: any = await stores.updateInventoryItem(req.body.values, req.body.id)

    res.json('hello')

});



router.get('/getInventoryItemsForDailyChecklist/:id', async (req, res) => {
    const business_id = req.params.id
    const newReply = await stores.getInventoryChecklistItems(business_id)
    res.json(newReply)

});

router.post('/insertInventoryChecklistItems', async (req: any, res) => {
    req.body.order_quantity = req.body.stock_level - req.body.in_stock

    if (req.body.order_quantity <= 0) {
        req.body.order_quantity = 0
    }
    delete req.body.stock_level
    const newReply = await stores.insertInventoryChecklistItems(req.body)
    res.json('hello')
});





export default router; 