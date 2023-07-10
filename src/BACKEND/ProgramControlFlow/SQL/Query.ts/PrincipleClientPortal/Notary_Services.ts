import { Query } from "../../Conection";


const getUpcomingNotaryServices = async () => Query('SELECT * FROM Clients.Principle_Notary_Request WHERE userId = 3 AND notary_request_type = "Certify copies"');
const requestNotaryServices = async (values: any) => Query('INSERT INTO Clients.Principle_Notary_Request SET ?', values);
const updateNotaryServiceRequest = async (info,id)=>Query('UPDATE Clients.Principle_Notary_Request SET ? WHERE id = ?',[info,id])
const deleteNotaryServiceRequest = async (id: string) => Query('DELETE FROM Clients.Principle_Notary_Request WHERE id = ?', [id]);





export default {
    getUpcomingNotaryServices,
    requestNotaryServices,
    updateNotaryServiceRequest,
    deleteNotaryServiceRequest
}