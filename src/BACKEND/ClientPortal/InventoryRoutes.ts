import * as express from 'express'
import 'dotenv/config'
import stores from '../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory';
import verify from '../ProgramControlFlow/SQL/Query.ts/Security/Verification'




const router = express.Router()


router.post('/createStore', async (req: any, res) => {
    const store = await stores.createStore(req.body)
    res.json('hello')
});


router.post('/insertInventoryItems', async (req: any, res) => {
    const current_store = await stores.insertInventoryItem(req.body)
    res.json(current_store)

});

router.get('/getInventoryItems', async (req: any, res) => {
   let business_id = req.cookies.user.id
    const resultInventory = await stores.getInventoryItems(business_id)
    

    res.json(resultInventory)
});


router.delete('/deleteInventoryItems', async (req: any, res) => {
    const current_store: any = await stores.deleteInventoryItem(req.body)
    res.json(current_store.affectedRows)

});

router.put('/updateInventoryItem', async (req: any, res) => {
    const current_store: any = await stores.updateInventoryItem(req.body.values, req.body.id)
    res.json(current_store)

});




//Checklist Routes

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
    res.json(newReply)
});

router.post('/verify_associate_pin', async (req: any, res) => {
  
        const [newReply,error] = await verify.associateVerification(req.body.pin,req.body.id)

        if (newReply){
            res.json(true)
        }else if (!newReply){
            res.json(false)
        }
    

});

router.get('/inventory_reference_information', async (req: any, res) => {
    let id = req.cookies.user.id
    const reply = await stores.getInventoryReference(id)
    console.log(reply)
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



export default router; 