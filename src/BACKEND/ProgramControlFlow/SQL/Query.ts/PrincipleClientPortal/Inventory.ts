import { Query } from "../../Conection";


const createStore = async (store: any) => Query('INSERT INTO Inventory.Store SET ?', store);
const selectStore = async (id) => Query('SELECT * FROM Inventory.Store WHERE ?;', [id]);
const insertInventoryItem = async (values: any) => Query('INSERT INTO Inventory.Store_Item SET ?', values);
const getInventoryItems = async (id) => Query('SELECT * FROM Inventory.Store_Item where ?;;', [id]);










export default {
    createStore,
    selectStore,
    insertInventoryItem,
    getInventoryItems
}