import express from 'express'
import * as DashboardController from '../controllers/Dashboard.js'

const router = express.Router()

router.get('/totalaset', DashboardController.countTotalAset)

export default router