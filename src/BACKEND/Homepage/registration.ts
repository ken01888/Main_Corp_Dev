import * as express from 'express'

import 'dotenv/config'
import database_query from '../ProgramControlFlow/SQL/Query.ts/Support_Database';
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { registrationInformation, checkAccount } from '../ProgramControlFlow/SQL/Query.ts/Login'
import { UnderlineOutlined } from '@ant-design/icons';
import { SignUpMessage } from '../ProgramControlFlow/SMS/send_sms';
import * as convert from 'convert-units'
import Nutrition from '../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/NutritionDetails.ts'


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

  // const BMI = () => {
  //   const ProcessingHeight = convert(Number(req.body.height.feet)).from('ft').to('in')
  //   const ProcessedHeight = ProcessingHeight + Number(req.body.height.inches)
  //   const HeightSquared = Math.pow(ProcessedHeight, 2)
  //   const weight = req.body.weight
  //   const CalculatedBMI = (weight / HeightSquared * 703).toFixed(1)
  //   const IdealWeight = {
  //     MinimumHealthyWeight: Number(18.5 / Number(CalculatedBMI) * weight).toFixed(2),
  //     MediumHealthyWeight: (Number(18.5 / Number(CalculatedBMI) * weight) + Number(24.9 / Number(CalculatedBMI) * weight)) / 2,
  //     MaximumHealthyWeight: Number(24.9 / Number(CalculatedBMI) * weight).toFixed(2),
  //   }
  //   const StringBMIIndicator = () => {
  //     if (Number(CalculatedBMI) <= 18.4) {
  //       return 'Underweight'
  //     }
  //     if (Number(CalculatedBMI) >= 18.5 && Number(CalculatedBMI) <= 24.9) {
  //       return 'Normal'
  //     }
  //     if (Number(CalculatedBMI) >= 25.0 && Number(CalculatedBMI) <= 39.9) {
  //       return 'Overweight'
  //     }
  //     if (Number(CalculatedBMI) >= 40.0) {
  //       return 'Obese'
  //     }
  //   }

  // const BMR = () => {
  //   const WeightInKiloGrams = convert(req.body.weight).from('lb').to('kg')
  //   const HeightInCentimeters = convert(ProcessingHeight).from('in').to('cm')
  //   switch (req.body.gender) {
  //     case 'male':
  //       const Male = 9.99 * WeightInKiloGrams + 6.25 * HeightInCentimeters - 4.92 * req.body.Newage + 5
  //       return Male
  //       break;
  //     case 'female':
  //       const Female = 9.99 * WeightInKiloGrams + 6.25 * HeightInCentimeters - 4.92 * req.body.Newage - 161
  //       return Female
  //       break;
  //     default:

  //       break;
  //   }
  // }



  // const TDEE = () => {
  //   const WeightInKiloGrams = convert(req.body.weight).from('lb').to('kg')
  //   const HeightInCentimeters = convert(ProcessingHeight).from('in').to('cm')
  //   switch (req.body.gender) {
  //     case 'male':
  //       const Male = 9.99 * WeightInKiloGrams + 6.25 * HeightInCentimeters - 4.92 * req.body.Newage + 5
  //       return Male
  //       break;
  //     case 'female':
  //       const Female = 9.99 * WeightInKiloGrams + 6.25 * HeightInCentimeters - 4.92 * req.body.Newage - 161
  //       return Female
  //       break;
  //     default:
  //       break;
  //   }
  // } 

  // return Number(CalculatedBMI)
  // }
  // BMI()
  const NutritionRequirement = async () => {
    const RetrieveNutrientsFromDatabase = await Nutrition.PersonalNutritionDetails(req.body.gender, req.body.age)
    console.log(registrationInformation)
    let replyArray: any = []
    let testingdata: any = {}
    testingdata['age'] = RetrieveNutrientsFromDatabase[0].age
    testingdata['gender'] = RetrieveNutrientsFromDatabase[0].gender
    testingdata['Calories'] =
    {
      value: RetrieveNutrientsFromDatabase[0].calories,
      unit: 'Kcal',
      dv: 2000,
      mc:530

    }
    testingdata['Total Fat'] =
    {
      value: (RetrieveNutrientsFromDatabase[0]['total_fat'] * RetrieveNutrientsFromDatabase[0].calories / 9).toFixed(),
      unit: 'Grams',
      dv: 78,
      mc:63
    }
    testingdata['Saturated Fat'] = {
      value: (RetrieveNutrientsFromDatabase[0]['saturated_fat'] * RetrieveNutrientsFromDatabase[0].calories / 9).toFixed(),
      unit: 'Grams',
      dv: 20,
      mc:24
    }
    testingdata['Cholesterol'] = {
      value: RetrieveNutrientsFromDatabase[0].cholesterol,
      unit: 'Grams',
      dv: 300,
      mc:525
    }
    testingdata['Sodium'] = {
      value: RetrieveNutrientsFromDatabase[0].sodium,
      unit: "MG",
      dv: 2300,
      mc:2070
    }
    testingdata['Carbohydrates'] = {
      value: (RetrieveNutrientsFromDatabase[0]['carbohydrates'] * RetrieveNutrientsFromDatabase[0].calories / 4).toFixed(),
      unit: 'G',
      dv: 275,
      mc:158
    }
    // testingdata['sugar'] = {
    //   value: RetrieveNutrientsFromDatabase[0].sugar,
    //   unit:
    // } 
    testingdata['Added Sugar'] = {
      value: (RetrieveNutrientsFromDatabase[0]['added_sugar'] * RetrieveNutrientsFromDatabase[0].calories / 4).toFixed(),
      unit: 'G',
      dv: 50,
      mc:41
    }
    testingdata['Protein'] = {
      value: (RetrieveNutrientsFromDatabase[0]['protein'] * RetrieveNutrientsFromDatabase[0].calories / 4).toFixed(),
      unit: "G",
      dv: 50,
      mc:36
    }
    testingdata['Vitamin D'] = {
      value: RetrieveNutrientsFromDatabase[0].vitamin_d,
      unit: 'MCG',
      dv: 20,
      mc:2
    }
    testingdata['Calcium'] = {
      value: RetrieveNutrientsFromDatabase[0].calcium,
      unit: 'MG',
      dv: 1300,
      mc:280
    }
    testingdata['Iron'] = {
      value: RetrieveNutrientsFromDatabase[0].iron,
      unit: 'MG',
      dv: 18,
      mc:7.5
    }
    testingdata['Potassium'] = {
      value: RetrieveNutrientsFromDatabase[0].potassium,
      unit: 'MG',
      dv: 4700,
      mc:980
    }

    for (let items in testingdata) {
      console.log(items,)
      replyArray.push({
        Name: items,
        Distinct: testingdata[`${items}`].value,
        Unit: testingdata[`${items}`].unit,
        DV:testingdata[`${items}`].dv,
        McDonaldsBigBreakfast:testingdata[`${items}`].mc
      })
    }
    console.log(replyArray)
    res.json(replyArray)

  };

  NutritionRequirement()

});



// [
//   {
//     id: 1,
//     age: '2-3 years old',
//     gender: 'male',
//     calories: 1000,
//     'total_fat_percent _kcal': 0.4,
//     'saturated_fat_percent _kcal': 0.9,
//     trans_fat_percent_kcal: 0.001,
//     cholesterol: 300,
//     sodium: 1200,
//     carbohydrates_percent_kcal: 0.65,
//     fiber: 0.014,
//     sugar: null,
//     added_sugar: 0.09,
//     protein_percent_calories: 0.2,
//     vitamin_d: 20,
//     calcium: 700,
//     iron: 7,
//     potassium: 2000
//   }
// ]


export default router;


