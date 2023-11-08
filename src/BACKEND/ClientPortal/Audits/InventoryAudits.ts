import * as express from 'express'
import 'dotenv/config'
import stores from '../../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory';


const router = express.Router()


router.get('/inventoryPeriod', async (req, res) => {
    const inventory_period = await stores.selectUniqueInventoryPeriod(req.cookies.user.id)
    res.json(inventory_period)
})


router.get('/inventory_reference_information', async (req: any, res) => {
    const reply:any = await stores.getInventoryReference(req.cookies.user.id, req.query.auditDate)
    res.json(reply)
});


router.delete('/deleteInventoryAuditItems', async (req: any, res) => {
    const current_store: any = await stores.deleteInventoryAuditItem(req.body)
    res.json(current_store.affectedRows)
});

router.put('/updateInventoryAuditItem', async (req: any, res) => {
    const current_store: any = await stores.updateInventoryAuditItem(req.body.values, req.body.id)
    res.json(current_store)
});

export default router;