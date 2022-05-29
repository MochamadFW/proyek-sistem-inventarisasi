import express from 'express'
import * as DashboardController from '../controllers/Dashboard.js'

const router = express.Router()

router.get('/totalaset', DashboardController.countTotalAset)
router.get('/totalpermintaan', DashboardController.countTotalPermintaan)
router.get('/:username', DashboardController.getTotalLogin)

export default router