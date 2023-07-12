import * as express from 'express'
import * as cors from 'cors'
import * as path from 'path'
import * as bodyParser from 'body-parser'
import 'dotenv/config'
import HomepageServer from './ProgramControlFlow/SQL/Query.ts/Homepage_Query';
import ClientPortal from './ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientPersonalDetails';
import { sendMessage, MessagingResponse, sendReply } from './ProgramControlFlow/SMS/send_sms';
import './PAYMENTS/authorize_card';
import contact from './Homepage/contact'
import client from './ClientPortal/ClientPersonalDetails'
import billing from './ClientPortal/ClientBilling';
import notary from './ClientPortal/ClientServiceRequest';
import registration from './Homepage/registration'




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

app.use('/message',contact)
app.use('/client_portal',client)
app.use('/client_portal',billing)

app.use('/client_portal_services',notary)
app.use('/client_registration',registration)



app.get('/test', (req, res) => {
  res.json('a')
})

app.get('/database', async (req, res) => {
  const newReply = await ClientPortal.getClientInformation()
  res.json(newReply)
  console.log(newReply)

})


app.post('/twilio', (req, res) => {
  // sendMessage();
  res.json("ok")
})

app.post('/sms',  (req, res) => {

  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');
  console.log(req.body.Body)

  res.header('Content-Type', 'application/xml')
  res.status(200).send(twiml.toString())
}



  // res.type('text/xml').send(twiml.toString());

);



const PORT = process.env.PORT || 80
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})



