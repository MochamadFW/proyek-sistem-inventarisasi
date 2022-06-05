import express from 'express'
import * as BarangController from '../controllers/Barang.js'

const router = express.Router()

router.post('/newbarang', BarangController.postNewBarang)
router.get('/allbarang', BarangController.getAllBarang)
router.get('/:id', BarangController.getBarangById)
router.get('/kodebarang/:kode_barang', BarangController.getBarangByKodebarang)
router.put('/:id', BarangController.updateBarangById)
router.delete('/:id', BarangController.deleteBarangById)

export default router