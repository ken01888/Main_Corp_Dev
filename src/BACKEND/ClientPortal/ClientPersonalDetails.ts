import * as express from 'express'
import * as cors from 'cors'
import * as path from 'path'
import * as bodyParser from 'body-parser'
import 'dotenv/config'
import client_admin_query from '../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientPersonalDetails';
import client_billing_query from '../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientBillingDetails';



const router = express.Router()

router.get('/getPrincipleInformation/?:id', async (req, res) => {
    const newReply = await client_admin_query.getClientInformation()
    const clientProfileReply = await Object.entries(newReply[0]).splice(1,9)
    res.json(clientProfileReply)
});

router.put('/updateClientinformation/?:id', async (req, res) => {
    const newReply = await client_admin_query.updatePRINCIPLE(req.body,req.params.id)
    res.json('hello')
});

router.get('/getPrincipleBillingInformation/?:id', async (req, res) => {
    const newReply = await client_billing_query.getBillingInformation()
    const clientProfileReply = await Object.entries(newReply[0]).splice(2,4)
    res.json(clientProfileReply)
   
});

router.put('/updatePrincipleBillingInformation/?:id', async (req, res) => {
    console.log(req.params)
    const newReply = await client_billing_query.updateBillingInformation(req.body,req.params.id)
    console.log(newReply)
    res.json('hello')
});




export default router; 