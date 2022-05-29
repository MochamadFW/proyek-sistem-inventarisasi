import express from 'express'
import * as JadwalKegiatanController from '../controllers/JadwalKegiatan.js'

const router = express.Router()

router.post('/newjadwalkegiatan', JadwalKegiatanController.postNewJadwalKegiatan)
router.get('/alljadwalkegiatan', JadwalKegiatanController.getAllJadwalKegiatan)
router.get('/:id', JadwalKegiatanController.getJadwalKegiatanById)
router.get('/:tanggal_kegiatan', JadwalKegiatanController.getJadwalKegiatanByTanggal)
router.get('/:nama_kegiatan', JadwalKegiatanController.getJadwalKegiatanByNama)
router.put('/:id', JadwalKegiatanController.updateJadwalKegiatanById)
router.delete('/:id', JadwalKegiatanController.deleteJadwalKegiatanById)

export default router