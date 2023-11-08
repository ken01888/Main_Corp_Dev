import * as express from 'express'
import 'dotenv/config'
import stores from '../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory';
import * as convert from 'convert-units'




const router = express.Router()







// Add Nutrition Information


router.get('/getNutrients/:id', async (req, res) => {
    const business_id = req.params.id
    const getProducts = await stores.getRecipeProduct(business_id );
    getProducts.map(async (i, n, a) => {
        const getInputs = await stores.getInputForUpdate(i.id)
         getInputs.map(async (i,n,a)=>{
            const newReply = await stores.UpdateProductInputs(i, i.id)
        })
        const productMeta = await stores.inputNutritionalInformation(i.id)
        stores.insertInputItemMeta(productMeta[0], i.id)
        return i
    });
    const getProducts_1 = await stores.getRecipeProduct(business_id);

    res.json(getProducts_1)
})




















export default router; 