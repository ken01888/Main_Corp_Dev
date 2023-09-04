import * as express from 'express'

import 'dotenv/config'
import database_query from '../ProgramControlFlow/SQL/Query.ts/Support_Database';
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { registrationInformation, checkAccount } from '../ProgramControlFlow/SQL/Query.ts/Login'
import { UnderlineOutlined } from '@ant-design/icons';
import { SignUpMessage } from '../ProgramControlFlow/SMS/send_sms';
const router = express.Router()

const checkCredentials = async (req, res, next) => {
    
  const check_DB_against_email: any[] = await checkAccount(req.body.email)
  if (check_DB_against_email.length === 0) {
    next()
  } else if(check_DB_against_email.length > 0) {
    res.json(true)
  }
}


router.post('/registration',checkCredentials, async (req, res) => {
  const salt = await bcrypt.genSaltSync(Number(process.env.SALT_ROUND));
  const hash = await bcrypt.hashSync(req.body.confirm_password, salt);
  delete req.body.confirm_password
  var token = jwt.sign({ user_name: req.body.email, email: req.body.email }, process.env.BEARER_PRIVATE);
  req.body.password = hash
  req.body.access_token = token
  req.body.pin = Math.floor(Math.random() * 999999) + 111111
  SignUpMessage(req.body.business_name,req.body.phone_number,req.body.email)
  registrationInformation(req.body)
  res.json(false)
});





export default router;


