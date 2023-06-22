import * as express from 'express'
import * as cors from 'cors'
import * as path from 'path'
import * as bodyParser from 'body-parser'
import 'dotenv/config'
import database_query from './SQL/Query.ts/Homepage_Query';
import { sendMessage, MessagingResponse, sendReply } from './SMS/send_sms';
import './PAYMENTS/authorize_card'


const app = express()

app.use(express.static('complie_frontend'))
app.use(cors())
app.use(express.json())
app.set('trust proxy', true)
app.use(bodyParser.urlencoded({ extended: false }));



const newUse = app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

app.get('/test', (req, res) => {
  res.json('a')
})

app.get('/database', async (req, res) => {
  const newReply = await database_query.allMessages()
  res.json(newReply)
  console.log(newReply)

})

app.post('/database_post', async (req, res) => {
  const newReply = await database_query.insertCLIENT(req.body)
  res.json(newReply)
  console.log(newReply)

})

app.post('/twilio', (req, res) => {
  sendMessage()
  res.json("ok")
})

app.post('/sms',  (req, res) => {
  const twiml = new MessagingResponse();
 twiml.message('The Robots are coming! Head for the hills!');

res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());

}


  // res.type('text/xml').send(twiml.toString());

);


const PORT = process.env.PORT || 80
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})



