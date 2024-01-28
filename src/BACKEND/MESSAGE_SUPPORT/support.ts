import * as express from 'express'

import 'dotenv/config'
import database_query from '../ProgramControlFlow/SQL/Query.ts/Support_Database';
import { MessageResponseFromHomePage } from '../ProgramControlFlow/SMS/send_sms';

const router = express.Router()

router.post('/support_message', async (req, res) => {
  //  MessageResponseFromHomePage(req.body.first_name, req.body.phone_number,req.body.email)
  const newReply = await database_query.insertMessage(req.body)
  console.log(req.body)
  res.json('heelo')
});





export default router; 