import * as express from 'express'

import 'dotenv/config'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { registrationInformation, checkAccount } from '../ProgramControlFlow/SQL/Query.ts/Login'
import * as convert from 'convert-units'
import Nutrition from '../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/NutritionDetails.ts'
import stores from '../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory';



const router = express.Router()

const checkCredentials = async (req, res, next) => {

  const check_DB_against_email: any[] = await checkAccount(req.body.email)
  if (check_DB_against_email.length === 0) {
    next()
  } else if (check_DB_against_email.length > 0) {
    res.json(true)
  }
}


router.post('/registration', checkCredentials, async (req, res) => {

  const salt = await bcrypt.genSaltSync(Number(process.env.SALT_ROUND));
  const hash = await bcrypt.hashSync(req.body.confirm_password, salt);
  delete req.body.confirm_password
  var token = jwt.sign({ user_name: req.body.email, email: req.body.email }, process.env.BEARER_PRIVATE);
  req.body.password = hash
  req.body.access_token = token
  req.body.pin = Math.floor(Math.random() * 999999) + 111111
  // SignUpMessage(req.body.business_name, req.body.phone_number, req.body.email)
  registrationInformation(req.body)
  res.json(false)
});

router.post('/bolatestingroute', async (req, res) => {
  const ProcessingHeight = convert(Number(req.body.height.feet)).from('ft').to('in')
  const ProcessedHeight = ProcessingHeight + Number(req.body.height.inches)
  const HeightSquared = Math.pow(ProcessedHeight, 2)
  const weight = req.body.weight
  const PersonalHealth = async () => {

    const CalculatedBMI = (weight / HeightSquared * 703).toFixed(1)
    const BMR = () => {
      const WeightInKiloGrams = convert(req.body.weight).from('lb').to('kg')
      const HeightInCentimeters = convert(ProcessedHeight).from('in').to('cm')
      switch (req.body.gender) {
        case 'male':
          const Male = (9.99 * WeightInKiloGrams) + ((6.25 * HeightInCentimeters) - (4.92 * req.body.age)) + 5
          return Male.toFixed()
        case 'female':
          const Female = (9.99 * WeightInKiloGrams) + ((6.25 * HeightInCentimeters) - (4.92 * req.body.age)) - 161
          return Female.toFixed()
        default:

          break;
      }
    }

   let IdealWeight={
    MinimumHealthyWeight: [((18.5 / Number(CalculatedBMI)) * req.body.weight).toFixed()],
    MediumHealthyWeight: ((21.7 / Number(CalculatedBMI)) * req.body.weight).toFixed(),
    MaximumHealthyWeight: ((24.9 / Number(CalculatedBMI)) * req.body.weight).toFixed(),
    }

    const StringBMIIndicator = () => {
      if (Number(CalculatedBMI) <= 18.4) {
        return {
          status: 'Underweight',
          color: '#E8DAC2',
         

        }
      }
      if (Number(CalculatedBMI) >= 18.5 && Number(CalculatedBMI) <= 24.9) {
        return {
          status: 'Normal',
          color: '#8CB1A8',
         


        }
      }
      if (Number(CalculatedBMI) >= 25.0 && Number(CalculatedBMI) <= 29.9) {
        return {
          status: 'Overweight',
          color: '#E5652E',
         


        }
      }
      if (Number(CalculatedBMI) >= 30.0) {
        return {
          status: 'Obese',
          color: '#BC4C58',
        


        }
      }
    }



    const Calories = () => {
      switch (req.body.life_style) {
        case 'Sedentary':
          const SMUL = 1.2;
          return Number(BMR()) * SMUL


          break;
        case 'Light activity':
          const LAMUL = 1.375
          return Number(BMR()) * LAMUL



          break;
        case 'Moderately active':
          const MAMUL = 1.55
          return Number(BMR()) * MAMUL



          break;
        case 'Very active':
          const VAMUL = 1.725
          return Number(BMR()) * VAMUL



          break;
        case 'Extra active':
          const EAMUL = 1.9
          return Number(BMR()) * EAMUL



          break;

        default:
          break;
      }
    };

    const CapturedAge = req.body.age

    const AGE = async () => {
      delete req.body.height
      req.body.height = ProcessedHeight
      await Nutrition.BoLAPublicHealthAssessment(req.body)
      if (req.body.age <= 75) {
        return req.body.age
      } else if (req.body.age > 75) {
        return req.body.age = 75
      };
    }

    AGE()

    const RetrieveNutrientsFromDatabase = await Nutrition.PersonalNutritionDetails(req.body.gender, req.body.age)

    const NutritionRequirement = () => {

      RetrieveNutrientsFromDatabase[0].calories = Calories();
      let testingdata: any = {}
      const replyArray: any = []
      testingdata['age'] = CapturedAge
      testingdata['gender'] = RetrieveNutrientsFromDatabase[0].gender
      testingdata['lifestyle'] = req.body.life_style

      testingdata['Calories'] =
      {
        value: RetrieveNutrientsFromDatabase[0].calories.toFixed(),
        unit: 'Kcal',
        dv: 2000,
        mc: 63
      }
      testingdata['Total Fat'] =
      {
        value: (RetrieveNutrientsFromDatabase[0]['total_fat'] * RetrieveNutrientsFromDatabase[0].calories / 9).toFixed(),
        unit: 'G',
        dv: 78,
        mc: 63
      }
      testingdata['Saturated Fat'] = {
        value: (RetrieveNutrientsFromDatabase[0]['saturated_fat'] * RetrieveNutrientsFromDatabase[0].calories / 9).toFixed(),
        unit: 'G',
        dv: 20,
        mc: 24
      }
      testingdata['Trans Fat'] = {
        value: (RetrieveNutrientsFromDatabase[0]['trans_fat'] * RetrieveNutrientsFromDatabase[0].calories / 9).toFixed(),
        unit: 'G',
        dv: 20,
        mc: 24
      }
      testingdata['Cholesterol'] = {
        value: RetrieveNutrientsFromDatabase[0].cholesterol,
        unit: 'G',
        dv: 300,
        mc: 525
      }
      testingdata['Sodium'] = {
        value: RetrieveNutrientsFromDatabase[0].sodium,
        unit: "MG",
        dv: 2300,
        mc: 2070
      }
      testingdata['Carbohydrates'] = {
        value: (RetrieveNutrientsFromDatabase[0]['carbohydrate'] * RetrieveNutrientsFromDatabase[0].calories / 4).toFixed(),
        unit: 'G',
        dv: 275,
        mc: 158
      }
      testingdata['Fiber'] = {
        value: (RetrieveNutrientsFromDatabase[0]['dietary_fiber'] * RetrieveNutrientsFromDatabase[0].calories).toFixed(),
        unit: 'G',
      }
      testingdata['Added Sugar'] = {
        value: (RetrieveNutrientsFromDatabase[0]['added_sugars_percent_of_calories'] * RetrieveNutrientsFromDatabase[0].calories / 4).toFixed(),
        unit: 'G',
        dv: 50,
        mc: 41
      }
      testingdata['Protein'] = {
        value: (RetrieveNutrientsFromDatabase[0]['protein'] * RetrieveNutrientsFromDatabase[0].calories / 4).toFixed(),
        unit: "G",
        dv: 50,
        mc: 36
      }
      testingdata['Vitamin D'] = {
        value: RetrieveNutrientsFromDatabase[0].vitamin_d,
        unit: 'MCG',
        dv: 20,
        mc: 2
      }
      testingdata['Calcium'] = {
        value: RetrieveNutrientsFromDatabase[0].calcium,
        unit: 'MG',
        dv: 1300,
        mc: 280
      }
      testingdata['Iron'] = {
        value: RetrieveNutrientsFromDatabase[0].iron,
        unit: 'MG',
        dv: 18,
        mc: 7.5
      }
      testingdata['Potassium'] = {
        value: RetrieveNutrientsFromDatabase[0].potassium,
        unit: 'MG',
        dv: 4700,
        mc: 980
      }


      for (let items in testingdata) {
        replyArray.push({
          Name: items,
          Distinct: testingdata[`${items}`].value,
          Unit: testingdata[`${items}`].unit,
          DV: testingdata[`${items}`].dv,
          McDonaldsBigBreakfast: testingdata[`${items}`].mc
        })
      };



      return [[testingdata], replyArray]
    };
    // console.log(CalculatedBMI, StringBMIIndicator(), IdealWeight, BMR(), NutritionRequirement())
    return [CalculatedBMI, StringBMIIndicator(),IdealWeight, BMR(), NutritionRequirement()]
  }
  const pushDataToFrontEnd = await PersonalHealth()
  // console.log(pushDataToFrontEnd)
  res.json(pushDataToFrontEnd)
});





export default router;


