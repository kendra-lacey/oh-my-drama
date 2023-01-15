import { Router } from "express";
import * as dramasCtrl from '../controllers/dramas.js'

const router = Router()

// GET/ DRAMAS
router.get('/', dramasCtrl.index)

export {
  router
}