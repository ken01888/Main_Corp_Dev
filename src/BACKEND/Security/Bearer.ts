
import 'dotenv/config'
import 'passport-local';
import * as passport from 'passport'
import * as BearerStrategy from 'passport-http-bearer';
import * as db from '../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/BearerTokenDetails'






passport.use(new BearerStrategy(
    async function (token, done) {
        const [user] = await db.getBearerInfo(token)
        console.log(token)
        // if (!user) {return done(null, false); }
        if (user){return done(null, user, { scope: 'all' })
    }
    }
));















