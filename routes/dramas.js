import { Router } from "express";
import * as dramasCtrl from '../controllers/dramas.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET/DRAMAS
router.get('/', dramasCtrl.index)

//GET/DRAMAS/NEW
router.get('/new', isLoggedIn,dramasCtrl.new)

//GET/DRAMAS/:ID
router.get('/:id', dramasCtrl.show)

//GET/DRAMAS/:ID/EDIT
router.get('/:id/edit', isLoggedIn, dramasCtrl.edit)

//POST/DRAMAS/NEW
router.post('/', isLoggedIn, dramasCtrl.create)

//POST/DRAMAS/:ID/REVIEWS
router.post('/:id/reviews',isLoggedIn, dramasCtrl.addReview)

//POST/DRAMAS/:ID/STARS
router.post('/:id/stars', dramasCtrl.addToMainChar)

//PUT/DRAMAS/:ID
router.put('/:id', isLoggedIn, dramasCtrl.update)

//DELETE/:DRAMAID/REVIEWS/:REVIEWID
router.delete('/:dramaId/reviews/:reviewId', isLoggedIn, dramasCtrl.deleteReview)

export {
  router
}