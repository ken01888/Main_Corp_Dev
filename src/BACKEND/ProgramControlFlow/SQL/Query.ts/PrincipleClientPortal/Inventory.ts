import { Query } from "../../Conection";


// Create Store 
const createStore = async (store: any) => Query('INSERT INTO Inventory.Store SET ?', store);
const selectStore = async (id) => Query('SELECT * FROM Inventory.Store WHERE ?;', [id]);


//Create and Add Inventory to Principle Database
const insertInventoryItem = async (values: any) => Query('INSERT INTO Inventory.Inventory_Items SET ?', values);
const getInventoryItems = async (business_id) => Query('SELECT * FROM Inventory.Inventory_Items WHERE business_id = ?', [business_id]);
const deleteInventoryItem = async (id) => Query('DELETE FROM Inventory.Inventory_Items WHERE ?', [id]);
const updateInventoryItem = async (values,id) => Query('UPDATE Inventory.Inventory_Items SET ? WHERE id = ?',[values,id]);
const getInventoryChecklistItems = async(business_id) => Query('SELECT id,category,recommended_stock_level,brand,supplier,description FROM Inventory.Inventory_Items WHERE business_id = ? ORDER BY category', [business_id]);
const insertInventoryChecklistItems = async (...values: any) => Query('INSERT INTO Inventory.Inventory_checklist SET ?', values);
const getPhoneNumbers = async(business_id) => Query('SELECT phone_number,business_name FROM Credentials.Principle_Login_Credentials WHERE id = 80', [business_id]);
const getInventoryReference = async(business_id) => Query('SELECT Inventory.Inventory_checklist.audit_reference_number, Inventory.Inventory_checklist.date_of_audit,Inventory.Inventory_checklist.in_stock,Inventory.Inventory_checklist.order_quantity,Inventory.Inventory_Items.supplier,Inventory.Inventory_Items.brand,Inventory.Inventory_Items.description,Inventory.Inventory_Items.category,Inventory.Inventory_Items.price,Inventory.Inventory_checklist.id,Inventory.Inventory_checklist.order_quantity FROM Inventory.Inventory_checklist INNER JOIN Inventory.Inventory_Items WHERE Inventory.Inventory_checklist.business_id = ? and Inventory.Inventory_checklist.inventory_item_id=Inventory.Inventory_Items.id ORDER BY Inventory.Inventory_checklist.date_of_audit', [business_id]);
const deleteInventoryAuditItem = async (id) => Query('DELETE FROM Inventory.Inventory_checklist WHERE ?', [id]);
const updateInventoryAuditItem = async (values,id) => Query('UPDATE Inventory.Inventory_checklist SET ? WHERE id = ?',[values,id]);














export default {
    createStore,
    selectStore,
    insertInventoryItem,
    getInventoryItems,
    deleteInventoryItem,
    updateInventoryItem,
    getInventoryChecklistItems,
    insertInventoryChecklistItems,
    getPhoneNumbers,
    getInventoryReference,
    deleteInventoryAuditItem,
    updateInventoryAuditItem
}