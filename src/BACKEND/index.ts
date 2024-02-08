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
import store from './ClientPortal/Stock';
import products from './ClientPortal/Products';
import instore from './ClientPortal/QRCODE/inStoreAudits'
import audits from './ClientPortal/Audits/InventoryAudits';
import nutrition from './ClientPortal/Nutrition';
import registration from './Homepage/registration'

import UPStrategy from './Security/localStrategy'
import * as session from 'express-session'
import './Security/Bearer'

import * as cookieparser from 'cookie-parser'
import * as convert from 'convert-units'
import * as tf from '@tensorflow/tfjs-node-gpu'
import { TagFilled } from '@ant-design/icons'
import * as qna from '@tensorflow-models/qna';
import '@tensorflow/tfjs-backend-webgl'
tf.backend()



const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Headers', '*')
  res.set('Cache-Control', 'no-cache')
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
  } else if (req.user) {
    next()
  }
}



app.use('/', express.static('public'))
app.use('/support', express.static('public'))
app.use('/aboutus', express.static('public'))
app.use('/termsofservice', express.static('public'))
app.use('/bola_overview', express.static('public'))
app.use('/privacypolicy', express.static('public'))
// app.use('/signup', express.static('public'))
app.use('/health-diagnostic', express.static('public'))
app.use('/inventorycheck', express.static('public'))
app.use('/nutrients', express.static('public'))
// app.use('/principle/', validateUser, express.static('public'))
// app.use('/principle/', express.static('public'))
// app.use('/principle/account', express.static('public'))
// app.use('/principle/store', express.static('public'))
// app.use('/principle/products', express.static('public'))
// app.use('/principle/nutrition', express.static('public'))
// app.use('/principle/bolamanual', express.static('public'))
// app.use('/principle/inventoryaudits', express.static('public'))




app.use('/login', express.static('public'))


app.use(registration)
app.use(support)
app.use(client)
app.use(nutrition)
app.use(store)
app.use(audits)
app.use(products)
app.use(instore)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public"))
});



 





// const test1 = []
// const tfoutput = []
// let index = 0
//  for  ( let index = 0 ; index <= 999  ; index++) {
//  let newReply = index 
// test1.push(newReply,newReply+100,1)
//  }
//  for  ( let index = 0 ; index <= 999  ; index++) {
//   let newReply = index * 4
//  tfoutput.push(newReply)
//   }

// const tfArray = tf.tensor(test1,[1000,3])
// const tfArrayOutput = tf.tensor(tfoutput,[1000,1])
// console.log(tfArrayOutput)
// tf.util.shuffleCombo(tfArray,tfArrayOutput)

// // const tfOutput = tfArray.mul(10)

// const model = tf.sequential();
// model.add(tf.layers.dense({inputShape:[3],units:100,activation:'relu'}))
// model.add(tf.layers.dense({units:100,activation:'relu'}))
// model.add(tf.layers.dense({units:1000,activation:'relu'}))


// model.add(tf.layers.dense({units:1}))

// // model.add(tf.layers.dense({units:1}))

// const train = async ()=>{
//   model.compile({
//     optimizer:tf.train.adam(),
//     loss:'meanSquaredError'
//   })
//   await model.fit(tfArray,tfArrayOutput,{
//     epochs:75,
//     batchSize:50,
//     shuffle:true,
//     validationSplit:.10

//   })
//   const newprediction = model.predict(tf.tensor([[3,301,3]]))
// newprediction.print()


// }
// train()





// const QnA = async () => {

//   const passage = "Rube Foster was the team’s traveling manager and one of the team’s starting pitchers. The Leland Giants were one of the top black baseball teams in the country and also won the prestigious Chicago City League title. The Leland Giants had a won-loss record of 54-18-1 (.750) in independent play and went 31-9 (.775) in the Chicago City League. Frank C. Leland was born in February of 1869 in Memphis,  Tennessee."
//   const question = "When was Frank C Leland born?"
//   const model = await qna.load();
//   console.log(model)
//   const answers = await model.findAnswers(question, passage);
//   answers.map((i)=>{
//     if(i.score>15){
//       console.log(i.text)
//     }
//   });
// }

// QnA();

















app.listen(8080, () => {
  console.log(`Server listening on port ${8080}...`)
})



