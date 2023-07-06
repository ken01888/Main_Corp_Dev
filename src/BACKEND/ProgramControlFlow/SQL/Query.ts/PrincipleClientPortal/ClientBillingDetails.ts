import { Query } from "../../Conection";


const getBillingInformation = async () => Query('SELECT * FROM Clients.Principle_Billing_Information');
const insertBillingInformation = async (values: any) => Query('INSERT INTO Clients.Principle_Billing_Information SET ?', values);
const updateBillingInformation = async (info,id)=>Query('UPDATE Clients.Principle_Billing_Information SET ? WHERE admin_id = ?',[info,id])

// const singleChirp = async (id:string) => Query('SELECT * FROM Chirps WHERE id = ?',[id]);
// const deleteMessages = async (id: string) => Query('DELETE FROM contact WHERE id = ?', [id]);
// const insertCLIENT = async (...values: any) => Query('INSERT INTO KCM_INC.clientRegistration SET ?', values);
// const insertInstitution = async (values: any) => Query('INSERT INTO Nutrientmap.institution SET ?', values);

// const updateMessages = async (newContent: any, id: any) => Query('UPDATE contact SET ? WHERE id = ?', [newContent, id])
// const allUsers = async () => Query('SELECT * FROM Users');
// const insertUsers = async(user :any )=>Query('INSERT INTO clients SET ?' ,[user]);
// const insertPhysical = async(physical :any,clientid:number )=>Query('INSERT INTO client_lifestyle SET ?' ,[physical]);





export default {
getBillingInformation,
insertBillingInformation,
updateBillingInformation
}