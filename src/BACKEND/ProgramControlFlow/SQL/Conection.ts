import * as mysql from 'mysql2';
import 'dotenv/config';
import { env } from 'node:process';




export const mysqlAccess = mysql.createPool({
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    host:process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),



    // socketPath:process.env.INSTANCE_UNIX_SOCKET

})

export const Query = (query:string,values?:Array<string|number>)=>{
    return new Promise<Array<any>>((resolve,reject)=>{
        mysqlAccess.query(query,values,(err,results:any) =>{
            if(err) return reject(err)
            return resolve(results);
        
        })
    })
};



