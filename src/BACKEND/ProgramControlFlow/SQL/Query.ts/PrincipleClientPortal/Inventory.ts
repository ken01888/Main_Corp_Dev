import { Query } from "../../Conection";


// Create Store 
const createStore = async (store: any) => Query('INSERT INTO Inventory.Store SET ?', store);
const selectStore = async (id) => Query('SELECT * FROM Inventory.Store WHERE ?;', [id]);


//Create and Add Inventory to Principle Database
const insertInventoryItem = async (values: any) => Query('INSERT INTO Inventory.Inventory_Items SET ?', values);
const getInventoryItems = async (business_id) => Query('SELECT * FROM Inventory.Inventory_Items WHERE business_id = ?', [business_id]);
const deleteInventoryItem = async (id) => Query('DELETE FROM Inventory.Inventory_Items WHERE ?', [id]);
const updateInventoryItem = async (values, id) => Query('UPDATE Inventory.Inventory_Items SET ? WHERE id = ?', [values, id]);
const getInventoryChecklistItems = async (business_id) => Query('SELECT id,category,recommended_stock_level,brand,supplier,description FROM Inventory.Inventory_Items WHERE business_id = ? ORDER BY category', [business_id]);
const insertInventoryChecklistItems = async (...values: any) => Query('INSERT INTO Inventory.Inventory_checklist SET ?', values);
const getPhoneNumbers = async (business_id) => Query('SELECT phone_number,business_name FROM Credentials.Principle_Login_Credentials WHERE id = 80', [business_id]);
const getInventoryReference = async (business_id, date_of_audit) => Query(`SELECT Inventory.Inventory_checklist.audit_reference_number, Inventory.Inventory_checklist.date_of_audit,Inventory.Inventory_checklist.in_stock,Inventory.Inventory_checklist.order_quantity,Inventory.Inventory_Items.supplier,Inventory.Inventory_Items.brand,Inventory.Inventory_Items.description,Inventory.Inventory_Items.category,Inventory.Inventory_Items.price,Inventory.Inventory_checklist.id,Inventory.Inventory_checklist.order_quantity FROM Inventory.Inventory_checklist INNER JOIN Inventory.Inventory_Items WHERE Inventory.Inventory_checklist.business_id = ? and Inventory.Inventory_checklist.date_of_audit = ? ORDER BY Inventory.Inventory_checklist.date_of_audit`, [business_id, date_of_audit]);
const deleteInventoryAuditItem = async (id) => Query('DELETE FROM Inventory.Inventory_checklist WHERE ?', [id]);
const updateInventoryAuditItem = async (values, id) => Query('UPDATE Inventory.Inventory_checklist SET ? WHERE id = ?', [values, id]);
const selectUniqueInventoryPeriod = async () => Query('SELECT date_of_audit FROM Inventory.Inventory_checklist');
const insertNutritionalInformation = async (values, id) => Query('UPDATE Inventory.Inventory_Items SET ? WHERE id = ?', [values, id])
const insertProductRecipeName = async (values) => Query('INSERT Recipe.Products SET ?', [values])
const upDateProductRecipeCost = async (values) => Query('INSERT Recipe.Products SET ?',[values])
const getRecipeProduct = async (id) => Query('SELECT * FROM Recipe.Products WHERE business_id = ?', [id])
const getInventoryItemsforSelect = async(id) => Query('select id ,description,category,total_package_weight,price_per_gram from Inventory.Inventory_Items where business_id = ? ORDER BY category', [id])
const getInventoryItemsforRecording = async(id) => Query('select * from Inventory.Inventory_Items where id = ?', [id])
const insertIngredients = async(values,product_id) => Query('INSERT Recipe.Product_Inputs SET ?  ', [values,product_id])
const sumOfAllIngredients = async(productId) =>Query('select sum(input_cost) from Recipe.Product_Inputs where product_id = ?',[productId])
const insertInputItemMeta = async(total_cost = 0,total_input_count = 0,total_weight=0,id) => Query('UPDATE Recipe.Products SET total_cost = ?, total_input_count = ?, total_weight = ? WHERE id = ?',[total_cost, total_input_count,total_weight,id])
const getIngredientCount = async(id) => Query('SELECT COUNT(inventory_item_id) FROM Recipe.Product_Inputs WHERE product_id = ?;',[id])
const totalInputWeight = async(productId) =>Query('select sum(input_weight) from Recipe.Product_Inputs where product_id = ?',[productId])
const deleteProduct = async(id) =>Query('DELETE FROM Recipe.Products WHERE id = ?',[id])
const UpdateProduct = async (values, id) => Query('UPDATE Recipe.Products SET ? WHERE id = ?', [values, id])
const inputNutritionalInformation = async (productId)=>Query('select sum(input_cost) as total_cost, sum(input_weight) as total_weight, COUNT(inventory_item_id) as total_input_count, sum(calories) as calories,sum(total_fat) as total_fat,sum(saturated_fat) as saturated_fat,sum(trans_fat) as trans_fat,sum(cholesterol) as cholesterol,sum(sodium) as sodium,sum(carbohydrates) as carbohydrates,sum(fiber) as fiber,sum(sugar) as sugar,sum(added_sugar) added_sugar,sum(protein) as protein,sum(calcium) as calcium,sum(iron) as iron,sum(potassium) as potassium,sum(vitamin_d) as vitamin_d from Recipe.Product_Inputs where product_id = ?',[productId])
const deleteInput = async(productId) =>Query('DELETE FROM Recipe.Product_Inputs WHERE product_id = ?',[productId])
const insertInputItemMetaFull = async(values,id) => Query('UPDATE Recipe.Products SET ? WHERE id = ?',[values,id])























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
    updateInventoryAuditItem,
    selectUniqueInventoryPeriod,
    insertNutritionalInformation,
    insertProductRecipeName,
    getRecipeProduct,
    getInventoryItemsforSelect,
    getInventoryItemsforRecording,
    insertIngredients,
    sumOfAllIngredients,
    insertInputItemMeta,
    upDateProductRecipeCost,
    getIngredientCount,
    totalInputWeight,
    deleteInput,
    deleteProduct,
    UpdateProduct,
    inputNutritionalInformation,
    insertInputItemMetaFull


}