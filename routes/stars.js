import { Router } from 'express'
import * as starsCtrl from '../controllers/stars.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET/STARS/NEW
router.get('/new', isLoggedIn, starsCtrl.new)

//  POST/STARS/CREATE
router.post('/',  isLoggedIn, starsCtrl.create)

export {
  router
}