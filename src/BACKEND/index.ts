import * as express from 'express'
import * as cors from 'cors'
import * as path from 'path'
import bodyParser from 'body-parser'
import { PullRequestOutlined, RestFilled } from '@ant-design/icons'
import 'dotenv/config'
import database_query from './SQL/Query.ts/Homepage_Query'

const app = express()

app.use(express.static('public'))
app.use(cors())
app.use(express.json())
app.set('trust proxy', true)



const newUse = app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

app.get('/test',(req,res)=>{
  res.json('a')
})

app.get('/database',async (req,res)=>{
  const newReply = await database_query.allMessages()
  res.json(newReply)
  console.log(newReply) 
  
})

app.post('/database_post',async (req,res)=>{
  const newReply = await database_query.insertCLIENT(req.body)
  res.json(newReply)
  console.log(newReply) 
  
})


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})



