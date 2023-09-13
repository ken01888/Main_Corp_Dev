import * as express from 'express'

import 'dotenv/config'
import 'passport-local';
import * as passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { checkAccount } from '../ProgramControlFlow/SQL/Query.ts/Login/index'
import * as bcrypt from 'bcrypt'



const router = express.Router();

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async function verify(email: string, password: string, done: any) {
  const [user] = await checkAccount(email)
  if (!user) {
    return done(null, false, { message: "Invalid credentials.\n" });
  }
  if (!bcrypt.compareSync(password, user.password)) {
    return done(null, false, { message: "Invalid credentials.\n" });
  }
  return done(null, user);

}
));

passport.serializeUser((user: any, done) => {
  delete user.date_time
  delete user.password
  delete user.terms_of_service
  delete user.privacy_policy
  process.nextTick(() => {
    return done(null, {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      business_name: user.business_name,
      phone_number: user.phone_number,
      email: user.email,
      account_type: user.account_type,
      access_token: user.access_token
    });
  });
});

passport.deserializeUser((user: any, done) => {
  process.nextTick(() => {
    return done(null, user);
  });
});


router.post('/login_verification', passport.authenticate('local'), (req: any, res) => {
  if (req.user) {
    req.logIn(req.user, function (err) {
      return res.cookie('user', req.user).json(req.user);
    });
  } else if (!req.user) {

    res.sendStatus(401)
  }
});


export default router;








