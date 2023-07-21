import * as express from 'express'
import 'dotenv/config'
import stores from '../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory';



const router = express.Router()


router.post('/createStore', async (req: any, res) => {
    req.body.client_id = req.user.id
    const store = await stores.createStore(req.body)
    res.json('hello')
});

router.get('/getStores',async (req:any,res)=>{
    console.log(req.user)
    req.body.client_id = req.user.id
    const current_store = await stores.selectStore(req.body) 
    res.json(current_store)

})

router.post('/insertInventoryItems',async (req:any,res)=>{
    const current_store = await stores.insertInventoryItem(req.body)
    res.json(current_store)

})

router.get('/getInventoryItems',async (req,res)=>{
    console.log(req.user)
    const getInventoryItems = await stores.getInventoryItems(5)
    res.json(getInventoryItems)
})


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