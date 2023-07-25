import * as express from 'express'
import 'dotenv/config'
import stores from '../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory';



const router = express.Router()


router.post('/createStore', async (req: any, res) => {
    const store = await stores.createStore(req.body)
    res.json('hello')
});


router.post('/insertInventoryItems', async (req: any, res) => {
    // req.body.business_id = req.user.id
    req.body.business_id = 2
    console.log(req.body)
    const current_store = await stores.insertInventoryItem(req.body)
    res.json(current_store)

});

router.get('/getInventoryItems', async (req: any, res) => {
    // req.body.business_id = req.user.id
    const business_id = 2
    const getInventoryItems = await stores.getInventoryItems({ business_id })

    res.json(getInventoryItems)
});


router.delete('/deleteInventoryItems', async (req: any, res) => {
    // req.body.business_id = req.user.id
    const current_store:any = await stores.deleteInventoryItem(req.body)
    res.json(current_store.affectedRows)

});

router.get('/updateInventoryItem', async (req: any, res) => {
    console.log(req.body)
    // req.body.business_id = req.user.id
    // const current_store:any = await stores.updateInventoryItem(38)
    res.json('hello')

});



// router.post('/requestNotary_Service_Requests/:id?', async (req, res) => {
//     const newReply = await NotaryRequest.requestNotaryServices(req.body)
//     res.json('hello')

// });

// router.put('/updateClientinformation', async (req:any, res) => {
// console.log(req.user)
//     const newReply = await client_admin_query.updatePRINCIPLE(req.body,req.user.id)
//     res.json(newReply)
// });





export default router; 