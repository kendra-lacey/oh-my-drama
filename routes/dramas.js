import { Router } from "express";
import * as dramasCtrl from '../controllers/dramas.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET/DRAMAS
router.get('/', dramasCtrl.index)

//GET/DRAMAS/NEW
router.get('/new', dramasCtrl.new)

//GET/DRAMAS/:ID
router.get('/:id', dramasCtrl.show)

//POST/DRAMAS/NEW
router.post('/', isLoggedIn, dramasCtrl.create)

//POST/DRAMAS/:ID/REVIEWS
router.post('/:id/reviews',isLoggedIn, dramasCtrl.addReview)


export {
  router
}