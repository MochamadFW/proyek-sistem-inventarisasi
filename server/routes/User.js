import express from 'express'
import * as UserController from '../controllers/User.js'

const router = express.Router()

router.post('/', UserController.postNewUser)

export default router