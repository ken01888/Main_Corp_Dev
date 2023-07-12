import * as express from 'express'

import 'dotenv/config'
import database_query from '../ProgramControlFlow/SQL/Query.ts/Homepage_Query';
import { MessageResponseFromHomePage } from '../ProgramControlFlow/SMS/send_sms';

const router = express.Router()

router.post('/client_message', async (req, res) => {
const sendTextReply = await MessageResponseFromHomePage(req.body.first_name,[req.body.phone_number] )
  const newReply = await database_query.insertMessage(req.body)
  console.log(sendTextReply)
  res.json(newReply)
});





export default router; 