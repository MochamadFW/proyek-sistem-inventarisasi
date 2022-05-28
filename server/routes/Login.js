import express from 'express'
import * as LoginController from '../controllers/Login.js'

const router = express.Router()

router.get('/:username/:password', LoginController.getLoginValidation)

export default router