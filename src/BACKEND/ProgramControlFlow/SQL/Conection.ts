import * as mysql from 'mysql2';
import 'dotenv/config';





export const mysqlAccess = mysql.createPool({
    port:3306,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
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



