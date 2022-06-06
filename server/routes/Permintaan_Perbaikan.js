import express from 'express'
import * as PermintaanController from '../controllers/Permintaan_Perbaikan.js'

const router = express.Router()

router.post('/newpermintaan', PermintaanController.postNewPermintaan)
router.get('/allpermintaan', PermintaanController.getAllPermintaan)
router.get('/:id', PermintaanController.getPermintaanById)
router.get('/pengaju/:nama_pengaju', PermintaanController.getPermintaanByPengaju)
router.delete('/:id', PermintaanController.deletePemrintaanById)

export default router