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
const getInventoryReference = async (business_id, date_of_audit) => Query(`SELECT Inventory.Inventory_checklist.*, Inventory.Inventory_Items.brand,Inventory.Inventory_Items.description,Inventory.Inventory_Items.brand,Inventory.Inventory_Items.category,Inventory.Inventory_Items.recommended_stock_level, (Inventory.Inventory_Items.price * Inventory.Inventory_checklist.order_quantity) as price,Inventory.Inventory_checklist.date_of_audit FROM Inventory.Inventory_checklist JOIN Inventory.Inventory_Items ON Inventory.Inventory_Items.id = Inventory.Inventory_checklist.inventory_item_id WHERE Inventory.Inventory_checklist.business_id = ${business_id} and Inventory.Inventory_checklist.date_of_audit = '${date_of_audit}'  ORDER BY Inventory.Inventory_checklist.date_of_audit;`, [business_id, date_of_audit]);
const deleteInventoryAuditItem = async (id) => Query('DELETE FROM Inventory.Inventory_checklist WHERE ?', [id]);
const updateInventoryAuditItem = async (values, id) => Query('UPDATE Inventory.Inventory_checklist SET ? WHERE id = ?', [values, id]);
const selectUniqueInventoryPeriod = async (id) => Query('SELECT date_of_audit,audit_reference_number FROM Inventory.Inventory_checklist WHERE business_id = ?',[id]);
const insertProductRecipeName = async (values) => Query('INSERT Recipe.Products SET ?', [values])
const upDateProductRecipeCost = async (values) => Query('INSERT Recipe.Products SET ?',[values])
const getRecipeProduct = async (id) => Query('SELECT * FROM Recipe.Products WHERE business_id = ?', [id])
const getInventoryItemsforSelect = async(id) => Query('select id ,description,category,total_package_weight,price_per_gram from Inventory.Inventory_Items where business_id = ? ORDER BY category', [id])
const getInventoryItemsforRecording = async(id) => Query('select * from Inventory.Inventory_Items where id = ?', [id])
const insertIngredients = async(values,product_id) => Query('INSERT Recipe.Product_Inputs SET ?  ', [values,product_id])
const sumOfAllIngredients = async(productId) =>Query('select sum(input_cost) from Recipe.Product_Inputs where product_id = ?',[productId])
const insertInputItemMeta = async(values,id) => Query('UPDATE Recipe.Products SET ? WHERE id = ?',[values,id])
const getIngredientCount = async(id) => Query('SELECT COUNT(inventory_item_id) FROM Recipe.Product_Inputs WHERE product_id = ?;',[id])
const totalInputWeight = async(productId) =>Query('select sum(input_weight) from Recipe.Product_Inputs where product_id = ?',[productId])
const deleteProduct = async(id) =>Query('DELETE FROM Recipe.Products WHERE id = ?',[id])
const UpdateProduct = async (values, id) => Query('UPDATE Recipe.Products SET ? WHERE id = ?', [values, id])
const deleteInput = async(productId) =>Query('DELETE FROM Recipe.Product_Inputs WHERE product_id = ?',[productId])
const insertInputItemMetaFull = async(values,id) => Query('UPDATE Recipe.Products SET ? WHERE id = ?',[values,id])
const selectAllInputs = async(id)=>Query(`SELECT Inventory.Inventory_Items.description,Recipe.Product_Inputs.inventory_item_id,Recipe.Product_Inputs.id,Recipe.Product_Inputs.input_weight,Recipe.Product_Inputs.input_cost,Inventory.Inventory_Items.price_per_gram,Recipe.Product_Inputs.product_id FROM Recipe.Product_Inputs INNER JOIN Inventory.Inventory_Items WHERE Recipe.Product_Inputs.inventory_item_id = Inventory.Inventory_Items.id and Recipe.Product_Inputs.product_id = ?`,[id])
const UpdateProductInputs = async(values,id) => Query('UPDATE Recipe.Product_Inputs SET ? WHERE id = ?',[values,id])
const deleteInputMeta = async(productId) =>Query('DELETE FROM Recipe.Product_Inputs WHERE id = ?',[productId])




const inputNutritionalInformation = async (productId)=>
Query("select sum(input_cost) as total_cost, sum(input_weight) as total_weight, COUNT(inventory_item_id) as total_input_count, sum(calories) as calories,sum(total_fat) as total_fat,sum(saturated_fat) as saturated_fat,sum(trans_fat) as trans_fat,sum(cholesterol) as cholesterol,sum(sodium) as sodium,sum(carbohydrates) as carbohydrates,sum(fiber) as fiber,sum(sugar) as sugar,sum(added_sugar) as added_sugar,sum(protein) as protein,sum(calcium) as calcium,sum(iron) as iron,sum(potassium) as potassium,sum(vitamin_d) as vitamin_d from Recipe.Product_Inputs where product_id = ?",[productId])
const insertNutritionalInformation = async (values, id) => Query('UPDATE Inventory.Inventory_Items SET ? WHERE id = ?', [values, id])

const getInputForUpdate = async (productId)=>
Query(`SELECT 
Recipe.Product_Inputs.id,
 (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.price_per_gram) as input_cost,
 (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.calories) as calories,
 (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.calories) as calories,
  (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.total_fat) as total_fat,
   (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.saturated_fat) as saturated_fat,
 (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.trans_fat) as trans_fat,
 (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.cholesterol) as cholesterol,
 (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.sodium) as sodium,
 (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.carbohydrates) as carbohydrates,
 (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.fiber) as fiber,
 (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.sugar) as sugar,
 (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.added_sugar) as added_sugar,
 (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.protein) as protein,
 (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.calcium) as calcium,
 (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.iron) as iron,
 (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.potassium) as potassium,
 (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.vitamin_d) as vitamin_d,
 (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.allergies) as allergies
 FROM Recipe.Product_Inputs INNER JOIN Inventory.Inventory_Items 
 WHERE Recipe.Product_Inputs.inventory_item_id = Inventory.Inventory_Items.id 
 and Recipe.Product_Inputs.product_id = ?`,[productId]);

 const getNutritionalInfoForPublic = async (id) => Query('SELECT Recipe.Products.*, Credentials.Principle_Login_Credentials.business_name from Recipe.Products join Credentials.Principle_Login_Credentials where Credentials.Principle_Login_Credentials.id = Recipe.Products.business_id and Credentials.Principle_Login_Credentials.id=?',[id])



























export default {
    getInputForUpdate,
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
    insertInputItemMetaFull,
    selectAllInputs,
    UpdateProductInputs,
    deleteInputMeta,
    getNutritionalInfoForPublic
    


}