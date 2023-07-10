import * as express from 'express'
import 'dotenv/config'
import client_admin_query from '../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientPersonalDetails';



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





export default router; 