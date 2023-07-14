import * as express from 'express'

import 'dotenv/config'
import 'passport-local';
import * as passport from 'passport'
import * as LocalStrategy from 'passport-local'
import { checkAccount } from './../ProgramControlFlow/SQL/Query.ts/Login/index'
import * as bcrypt from 'bcrypt'

const router = express.Router()





const strategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async function verify(email, password, done) {
    const [user] = await checkAccount(email)
       if (!user) {
         return done(null, false, { message: "Invalid credentials.\n" });
       }
       if (!bcrypt.compareSync(password, user.password)) {
         return done(null, false, { message: "Invalid credentials.\n" });
       } 
       return done(null, user);
     }
   );
   passport.use(strategy)

passport.serializeUser( (user:any, done) =>{
    console.log("here at serialize")
    process.nextTick(()=> {
      return done(null, {
            id: user.id,
            username: user.first_name + user.last_name,
            
          });
    });
});

passport.deserializeUser((user:Express.AuthInfo, done) => {
    console.log("here at deserialize")

    process.nextTick( () =>{
        return done(null,user );
    });
});


router.post('/login_verification', passport.authenticate('local'), (req:any, res) => {
    if (req.user){
        res.json(req.user)

    } else if(!req.user){
        console.log('unauthorized')
    }
});








export default router;