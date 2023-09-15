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
import support from './MESSAGE_SUPPORT/support'
import client from './ClientPortal/ClientPersonalDetails'
// import billing from './ClientPortal/ClientBilling';
import store from './ClientPortal/StorePage';
import inventory from './ClientPortal/InventoryRoutes';

import registration from './Homepage/registration'
import UPStrategy from './Security/localStrategy'
import * as session from 'express-session'
import './Security/Bearer'

import * as cookieparser from 'cookie-parser'



const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Headers', '*')
  res.set('Cache-Control','no-cache')
  next()
})
app.set('trust proxy', true)

app.use(cookieparser())
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));


app.use(passport.initialize());

app.use(passport.session());



app.use(UPStrategy)
const validateUser = (req, res, next) => {
  if (!req.user) {
    res.redirect('/signup')
  } else if(req.user) {
    next()
  }
}



app.use('/', express.static( 'public'))
app.use('/inventorycheck', express.static( 'public'))
app.use('/signup', express.static( 'public'))
app.use('/store', express.static( 'public'))
app.use('/principle/', validateUser, express.static('public'))

app.use(registration)
app.use(support)
app.use(client)
app.use(inventory)
app.use(store)







 
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});
app.listen(8080, () => {
  console.log(`Server listening on port ${8080}...`)
})



