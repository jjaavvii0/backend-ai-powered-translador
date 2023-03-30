import {Router} from "express"
const router = Router()

import * as usersCtrl from "../controllers/users.controller"

router.get("/", usersCtrl.getUsers)
router.post("/", usersCtrl.createUser)

export default router;