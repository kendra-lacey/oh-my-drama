import { Router } from 'express'
import * as performersCtrl from '../controllers/stars.js'

const router = Router()

// GET/STARS/NEW
router.get('/new', starsCtrl.new)


export {
  router
}