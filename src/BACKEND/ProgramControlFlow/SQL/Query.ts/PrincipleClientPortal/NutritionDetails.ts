import { Query } from "../../Conection";


const PersonalNutritionDetails = async (gender,age) => Query('Select * From Nutritional_Item_Analytics.Population_Nutrient_Intake Where gender = ? and age = ?',[gender,age]);






export default {
    PersonalNutritionDetails,
}