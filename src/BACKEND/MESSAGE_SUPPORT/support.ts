import * as express from 'express'

import 'dotenv/config'
import database_query from '../ProgramControlFlow/SQL/Query.ts/Support_Database';
import { MessageResponseFromHomePage } from '../ProgramControlFlow/SMS/send_sms';

const router = express.Router()

router.post('/support_message', async (req, res) => {
  const sendTextReply = await MessageResponseFromHomePage(req.body.first_name, [req.body.phone_number])
  const newReply = await database_query.insertMessage(req.body)
  res.json(newReply)
});





export default router; 