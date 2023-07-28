import express from 'express'
import 'dotenv/config'
import NotaryRequest from '../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Notary_Services';



const router = express.Router()

router.get('/getNotary_Service_Requests/:id?', async (req, res) => {
    const newReply = await NotaryRequest.getUpcomingNotaryServices()
    res.json(newReply)
});

router.post('/requestNotary_Service_Requests/:id?', async (req, res) => {
    const newReply = await NotaryRequest.requestNotaryServices(req.body)
    res.json('hello')

});

// router.get('/getPrincipleBillingInformation/?:id', async (req, res) => {
//     const newReply = await NotaryRequest.getBillingInformation()
//     const clientProfileReply = await Object.entries(newReply[0]).splice(2,5)
//     res.json(clientProfileReply)
   
// });

// router.put('/updatePrincipleBillingInformation/?:id', async (req, res) => {
//     console.log(req.params)
//     const newReply = await NotaryRequest.updateBillingInformation(req.body,req.params.id)
//     console.log(newReply)
//     res.json('hello')
// });






export default router; 