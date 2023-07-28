import * as express from 'express'
import 'dotenv/config'
import client_admin_query from '../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientPersonalDetails';
import {checkAccount} from '../ProgramControlFlow/SQL/Query.ts/Login/'





const router = express.Router()

router.get('/getPrincipleInformation', async (req:any, res) => {
    res.cookie('user',req.user)


});

router.put('/updateClientinformation', async (req:any, res) => {
    const newReply = await client_admin_query.updatePRINCIPLE(req.body,req.user.id)
    res.json(newReply)
});





export default router; 

