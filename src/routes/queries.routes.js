import {Router} from "express"
const router = Router()

import * as queriesCtrl from "../controllers/queries.controller"

router.get("/", queriesCtrl.getQueries)
router.post("/", queriesCtrl.createQuery)
router.delete('/:id', queriesCtrl.deleteQuery)
router.post('/generateResponse', queriesCtrl.generateResponse)

export default router;