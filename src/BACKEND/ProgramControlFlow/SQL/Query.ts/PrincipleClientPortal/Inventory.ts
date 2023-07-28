import { Query } from "../../Conection";


// Create Store 
const createStore = async (store: any) => Query('INSERT INTO Inventory.Store SET ?', store);
const selectStore = async (id) => Query('SELECT * FROM Inventory.Store WHERE ?;', [id]);


//Create and Add Inventory to Principle Database
const insertInventoryItem = async (values: any) => Query('INSERT INTO Inventory.Inventory_Items SET ?', values);
const getInventoryItems = async (business_id) => Query('SELECT * FROM Inventory.Inventory_Items WHERE business_id = ?', [business_id]);
const deleteInventoryItem = async (id) => Query('DELETE FROM Inventory.Inventory_Items WHERE ?', [id]);
const updateInventoryItem = async (values,id) => Query('UPDATE Inventory.Inventory_Items SET ? WHERE id = ?',[values,id]);
const getInventoryChecklistItems = async(business_id) => Query('SELECT id,category,stock_level,brand,supplier,description FROM Inventory.Inventory_Items WHERE business_id = ? ORDER BY category', [business_id]);
const insertInventoryChecklistItems = async (...values: any) => Query('INSERT INTO Inventory.Inventory_checklist SET ?', values);












export default {
    createStore,
    selectStore,
    insertInventoryItem,
    getInventoryItems,
    deleteInventoryItem,
    updateInventoryItem,
    getInventoryChecklistItems,
    insertInventoryChecklistItems
}