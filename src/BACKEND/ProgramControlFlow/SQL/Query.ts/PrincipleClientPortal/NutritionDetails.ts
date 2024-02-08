import { Query } from "../../Conection";


const PersonalNutritionDetails = async (gender,age) => Query('Select * From Nutritional_Item_Analytics.Population_Nutrient_Intake Where gender = ? and age = ?',[gender,age]);
const BoLAPublicHealthAssessment = async (values: any) => Query('INSERT INTO Public_Utilities.BoLA_Public_Health_Assessment SET ?', values);







export default {
    PersonalNutritionDetails,
    BoLAPublicHealthAssessment

}