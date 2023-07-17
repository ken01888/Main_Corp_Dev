import * as express from 'express'
import * as cors from 'cors'
import * as path from 'path'
import * as bodyParser from 'body-parser'
import * as passport from 'passport'
import 'dotenv/config'
// import HomepageServer from './ProgramControlFlow/SQL/Query.ts/Homepage_Query';
// import ClientPortal from './ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientPersonalDetails';
// import { MessagingResponse, sendReply } from './ProgramControlFlow/SMS/send_sms';
// import './ProgramControlFlow/PAYMENTS/authorize_card';
// import contact from './Homepage/contact'
// import client from './ClientPortal/ClientPersonalDetails'
// import billing from './ClientPortal/ClientBilling';
// import notary from './ClientPortal/ClientServiceRequest';
import registration from './Homepage/registration'
import UPStrategy from './Security/localStrategy'
import * as session from 'express-session'
import './Security/Bearer'
import * as cookieparser from 'cookie-parser'


const app = express()

app.use(express.json())
app.use(cookieparser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.set('trust proxy', true)

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Headers', '*')
  next()
})




app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());



app.use('/', express.static('public'));

app.use(UPStrategy)












// app.use(authenticationUser)
app.use('/client_registration', registration)
// app.use('/message',contact)
// app.use('/client_portal',client)
// app.use('/client_portal',billing)
// app.use('/client_portal_services',notary)

app.listen(8000, () => {
  console.log(`Server listening on port ${8000}...`)
})



