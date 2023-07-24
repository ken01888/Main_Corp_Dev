import { Query } from "../../Conection";


 export let registrationInformation = async (values: any) => Query('INSERT INTO Credentials.Principle_Login_Credentials SET ?', values);
 export let checkAccount = async (email:string) => Query('SELECT * FROM Credentials.Principle_Login_Credentials WHERE email = ?',[email])






