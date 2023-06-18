import * as mysql from 'mysql2';
import 'dotenv/config';





const mysqlAccess = mysql.createPool({
    port:3306,
    user:'root',
    password:"4#MiSg!4",
    database:process.env.DATABASE
})

export const Query = (query:string,values?:Array<string|number>)=>{
    return new Promise<Array<any>>((resolve,reject)=>{
        mysqlAccess.query(query,values,(err,results:any) =>{
            if(err) return reject(err)
            return resolve(results);
        })
    })
};



