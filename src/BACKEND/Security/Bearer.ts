
import 'dotenv/config'
import 'passport-local';
import * as passport from 'passport'
import {Strategy as BearerStrategy} from 'passport-http-bearer';
import * as db from '../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/BearerTokenDetails'
import { mysqlAccess } from '../ProgramControlFlow/SQL/Conection';






passport.use(new BearerStrategy(
     (token, done)=> {
        mysqlAccess.query(`SELECT * FROM Credentials.Login_Credentials Where access_token = ?`, [token], (error, user) => {

            if (error) { return done(error); }
            if (!user) { return done(null, false); }
            if (user) {
               
                return done(null, user, { scope: 'read' });

            }

        })
    }
));















