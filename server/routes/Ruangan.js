import express from 'express'
import * as RuanganController from '../controllers/Ruangan.js'

const router = express.Router()

router.post('/newruangan', RuanganController.postNewRuangan)
router.get('/allruangan', RuanganController.getAllRuangan)
router.get('/:id', RuanganController.getRuanganById)
router.get('/kode_ruangan/:kode_ruangan', RuanganController.getRuanganByKoderuangan)
router.get('/barang/:nama_ruangan', RuanganController.getNamaBarangByNamaRuangan)
router.get('/barang/:nama_ruangan/:nama_barang', RuanganController.getJumlahBarangByNamaBarang)
router.get('/jumlah_harga/allruangan', RuanganController.jumlahHargaAllRuangan)
router.get('/jumlah_harga/:nama_ruangan', RuanganController.jumlahHargaByNamaRuangan)
router.put('/:id', RuanganController.updateRuanganById)
router.delete('/:id', RuanganController.deleteRuanganById)
router.delete('/deletebykode/:kode_ruangan', RuanganController.deleteRuanganByKoderuangan)

export default router