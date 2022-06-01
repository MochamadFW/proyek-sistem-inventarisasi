import express from 'express'
import * as LoginController from '../controllers/Login.js'

const router = express.Router()

router.post('/', LoginController.getLoginValidation)

export default router