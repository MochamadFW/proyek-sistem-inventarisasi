import express from 'express'
import * as LoginController from '../controllers/Login.js'

const router = express.Router()

router.get('/', LoginController.getLoginValidation)

export default router