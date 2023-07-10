import * as express from 'express'
import 'dotenv/config'
import client_billing_query from '../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientBillingDetails';



const router = express.Router()

router.get('/getPrincipleBillingInformation/:id?', async (req, res) => {
    const newReply = await client_billing_query.getBillingInformation()
    const clientProfileReply = await Object.entries(newReply[0]).splice(2,5)
    res.json(clientProfileReply)
   
});

router.put('/updatePrincipleBillingInformation/:id?', async (req, res) => {
    console.log(req)
    const newReply = await client_billing_query.updateBillingInformation(req.body,req.params.id)
    console.log(newReply)
    res.json('hello')
});






export default router; 