import * as express from 'express'

import 'dotenv/config'
import database_query from '../ProgramControlFlow/SQL/Query.ts/Homepage_Query';

const router = express.Router()

router.post('/client_message',  async (req, res) => {
    const newReply = await database_query.insertMessage(req.body)
  console.log(req.body)
    res.json(newReply)
  });





  export default router; 