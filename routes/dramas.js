import { Router } from "express";
import * as dramasCtrl from '../controllers/dramas.js'

const router = Router()

// GET/DRAMAS
router.get('/', dramasCtrl.index)

//GET/DRAMAS/NEW
router.get('/new', dramasCtrl.new)

//POST/DRAMAS/NEW
router.post('/new', dramasCtrl.create)

export {
  router
}