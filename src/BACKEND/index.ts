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
// import * as qna from '@tensorflow-models/qna';
// import '@tensorflow/tfjs-backend-webgl'




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



app.use('/inventorycheck', express.static('public'))
app.use('/nutrients', express.static('public'))
// app.use('/principle/', validateUser, express.static('public'))
app.use('/principle/', express.static('public'))
app.use('/principle/store', express.static('public'))
app.use('/principle/products', express.static('public'))
app.use('/principle/bolamanual', express.static('public'))



app.use('/login', express.static('public'))
app.use('/signup', express.static('public'))
app.use('/store', express.static('public'))
app.use('/inventoryaudits', express.static('public'))
app.use('/nutrition', express.static('public'))
app.use('/account', express.static('public'))
app.use('/products', express.static('public'))

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




app.post('/nutritionalData', async (req, res, error) => {
  const data = await fetch(
    `https://api.nal.usda.gov/fdc/v1/foods/search?query=${req.body.foodSelection}&pageSize=4&dataType=Foundation&api_key=${process.env.API_KEY}`
  )
  const foodsQuery = await data.json()

  const foodsArray = await foodsQuery.foods.map((i: any) => {
    return i
  })
  let arraySort = foodsArray[0].foodNutrients.sort((a: any, b: any) => {
    const nameA = a.nutrientName.toUpperCase() // ignore upper and lowercase
    const nameB = b.nutrientName.toUpperCase() // ignore upper and lowercase
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }

    // names must be equal
    return 0
  })



  const nutrientProfile: [] = arraySort.map((data: any, index: number) => {
    if (
      data.nutrientId == 1003 ||
      data.nutrientId == 1087 ||
      data.nutrientId == 1093

    ) {
      return data
    }
  })
  let selectedNutrients = nutrientProfile.filter(
    index => index !== undefined || null
  )

  res.json([foodsArray[0].description, selectedNutrients])

})

// const test1 = []
// const tfoutput = []
// let index = 0
//  for  ( let index = 0 ; index <= 999  ; index++) {
//  let newReply = index 
// test1.push(newReply,newReply+100,1)
//  }
//  for  ( let index = 0 ; index <= 999  ; index++) {
//   let newReply = index
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
























app.listen(8080, () => {
  console.log(`Server listening on port ${8080}...`)
})



