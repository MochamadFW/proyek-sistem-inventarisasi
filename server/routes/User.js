import express from 'express'
import * as UserController from '../controllers/User.js'

const router = express.Router()

router.post('/newuser', UserController.postNewUser)
router.get('/alluser', UserController.getAllUser)
router.get('/:username', UserController.getUserByUsername)
router.get('/:username', UserController.getUserByUsername)
router.put('/:username', UserController.updatePasswordByUsername)
router.delete('/:username', UserController.deleteUserByUsername)


export default router