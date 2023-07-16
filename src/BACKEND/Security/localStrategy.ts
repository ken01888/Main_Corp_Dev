import * as express from 'express'

import 'dotenv/config'
import 'passport-local';
import * as passport from 'passport'
import * as LocalStrategy from 'passport-local'
import { checkAccount } from '../ProgramControlFlow/SQL/Query.ts/Login/index'
import * as bcrypt from 'bcrypt'



const router = express.Router();


passport.use( new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async function verify(email, password, done) {
  const [user] = await checkAccount(email)
  try {
    if (!user) {
      return done(null, false, { message: "Invalid credentials.\n" });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return done(null, false, { message: "Invalid credentials.\n" });
    }
    return done(null, user);
  } catch (error) {
    console.log(error)
  }
}
));

passport.serializeUser((user:any, done) => {
  console.log('serialize :',user)

  process.nextTick(() => {

    return done(null, {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      business_name: user.business_name,
      phone_number: user.phone_number,
      email: user.email,
      account_type: user.account_type,
      token: user.access_token
    });
  });
});

passport.deserializeUser((user: any, done) => {
  console.log('deserialize :',user)
  process.nextTick(() => {
    return done(null, user);
  });
});


router.post('/login_verification', passport.authenticate('local'), (req:any, res) => {
console.log('onpost :',req.user)
  if (req.user) {
    res.sendStatus(200)
  } else if (!req.user) {
    res.sendStatus(401)

  }
});


export default router;








