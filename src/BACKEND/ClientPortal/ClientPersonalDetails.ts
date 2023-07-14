import * as express from 'express'
import 'dotenv/config'
import client_admin_query from '../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientPersonalDetails';



const router = express.Router()

router.get('/getPrincipleInformation', async (req:any, res) => {
    // console.log(req.user)
    // const newReply = await client_admin_query.getClientInformation(req.params)
    // const clientProfileReply = await Object.entries(req.user[0]).splice(1,9)
    res.json('req.user.id')
});

router.put('/updateClientinformation/?:id', async (req, res) => {
    const newReply = await client_admin_query.updatePRINCIPLE(req.body,req.params.id)
    res.json('hello')
});





export default router; 