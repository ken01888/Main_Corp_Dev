import { Query } from "../../Conection";


 export const registrationInformation = async (values: any) => Query('INSERT INTO Credentials.Login_Credentials SET ?', values);
 export const checkAccount = async (email:any) => Query('SELECT * FROM Credentials.Login_Credentials WHERE email = ?',email)






