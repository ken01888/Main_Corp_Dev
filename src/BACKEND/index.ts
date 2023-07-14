import * as express from 'express'
import * as cors from 'cors'
import * as path from 'path'
import * as bodyParser from 'body-parser'
import * as passport from 'passport'
import 'dotenv/config'
import HomepageServer from './ProgramControlFlow/SQL/Query.ts/Homepage_Query';
import ClientPortal from './ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientPersonalDetails';
import { MessagingResponse, sendReply } from './ProgramControlFlow/SMS/send_sms';
import './PAYMENTS/authorize_card';
import contact from './Homepage/contact'
import client from './ClientPortal/ClientPersonalDetails'
import billing from './ClientPortal/ClientBilling';
import notary from './ClientPortal/ClientServiceRequest';
import registration from './Homepage/registration'
import security from './Security/SigninVerification'
import * as session from 'express-session'




const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.set('trust proxy', true)


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: false,
//   cookie: { secure: false }
// }));

// app.use(passport.initialize());
// app.use(passport.session());

app.use('/',express.static(path.join('public')))

// app.get('/testing_sessions',(req:any,res)=>{
//   console.log(req.user)
//   res.json(req.user)
//   })

// app.use('/message',contact)
// app.use('/client_portal',client)
// app.use('/client_portal',billing)

// app.use('/client_portal_services',notary)
// app.use('/client_registration',registration)



// app.use(security)




// const PORT = process.env.PORT || 8080
app.listen(8080, () => {
  console.log(`Server listening on port ${8080}...`)
})



