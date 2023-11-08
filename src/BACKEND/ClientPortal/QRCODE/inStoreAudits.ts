import * as express from 'express'
import 'dotenv/config'
import stores from '../../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory';





const router = express.Router()





//Checklist Routes

router.get('/getInventoryItemsForDailyChecklist/:id', async (req, res) => {
    const business_id = req.params.id
    const newReply = await stores.getInventoryChecklistItems(business_id)
    res.json(newReply)
});

router.post('/insertInventoryChecklistItems', async (req: any, res) => {
    req.body.order_quantity = req.body.recommended_stock_level - req.body.in_stock
    if (req.body.order_quantity <= 0) {
        req.body.order_quantity = 0
    }
    delete req.body.recommended_stock_level
    const newReply = await stores.insertInventoryChecklistItems(req.body)
    res.json(newReply)
});


router.get('/publicNutritionalInformation/:id', async (req, res) => {
    const business_id = req.params.id
    const newReply = await stores.getNutritionalInfoForPublic(business_id)
    res.json(newReply)
});

export default router; 







