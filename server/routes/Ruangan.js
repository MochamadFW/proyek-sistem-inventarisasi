import express from 'express'
import * as RuanganController from '../controllers/Ruangan.js'

const router = express.Router()

router.post('/newruangan', RuanganController.postNewRuangan)
router.get('/allruangan', RuanganController.getAllRuangan)
router.get('/:id', RuanganController.getRuanganById)
router.get('/:kode_ruangan', RuanganController.getRuanganByKoderuangan)
router.put('/:id', RuanganController.updateRuanganById)
router.delete('/:id', RuanganController.deleteRuanganById)
router.delete('/:kode_ruangan', RuanganController.deleteRuanganByKoderuangan)

export default router