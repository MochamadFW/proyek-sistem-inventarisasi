import express from 'express'
import * as UserController from '../controllers/User.js'

const router = express.Router()

router.post('/newuser', UserController.postNewUser)
router.get('/alluser', UserController.getAllUser)
router.get('/:id', UserController.getUserById)
router.get('/username/:username', UserController.getUserByUsername)
router.put('/:id', UserController.updateUserById)
router.put('/changepassword/:username', UserController.updatePasswordByUsername)
router.delete('/:id', UserController.deleteUserById)


export default router