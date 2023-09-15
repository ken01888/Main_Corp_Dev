import * as mysql from 'mysql2';
import 'dotenv/config';





export const mysqlAccess = mysql.createPool({
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    host:process.env.MYSQL_HOST,
    database: process.env.DB_NAME,
    port:3306,
    socketPath:process.env.INSTANCE_UNIX_SOCKET
})

export const Query = (query:string,values?:Array<string|number>)=>{
    return new Promise<Array<any>>((resolve,reject)=>{
        mysqlAccess.query(query,values,(err,results:any) =>{
            if(err) return reject(err)
            return resolve(results);
        })
    })
};



