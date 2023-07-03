import * as express from 'express'
import * as cors from 'cors'
import * as path from 'path'
import * as bodyParser from 'body-parser'
import 'dotenv/config'
import database_query from '../ProgramControlFlow/SQL/Query.ts/Homepage_Query';
import { sendMessage, MessagingResponse, sendReply } from '../ProgramControlFlow/SMS/send_sms';

const router = express.Router()

router.post('/client_message',  async (req, res) => {
    const newReply = await database_query.insertCLIENT(req.body)
  console.log(req.body)
    res.json(newReply)
  });





  export default router; 