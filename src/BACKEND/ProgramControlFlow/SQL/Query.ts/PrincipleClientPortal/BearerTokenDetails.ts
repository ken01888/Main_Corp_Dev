import { Query } from "../../Conection";


export const getBearerInfo = async (token) => Query('SELECT * FROM Credentials.Login_Credentials where access_token = ?',[token]);
