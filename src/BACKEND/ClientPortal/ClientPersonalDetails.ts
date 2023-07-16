import * as express from 'express'
import 'dotenv/config'
import client_admin_query from '../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientPersonalDetails';



const router = express.Router()

router.get('/getPrincipleInformation', async (req:any, res) => {
    delete req.user.bearer_token
    res.json(Object.entries(req.user))
});

router.put('/updateClientinformation', async (req:any, res) => {
console.log(req.user)
    const newReply = await client_admin_query.updatePRINCIPLE(req.body,req.user.id)
    res.json(newReply)
});





export default router; 