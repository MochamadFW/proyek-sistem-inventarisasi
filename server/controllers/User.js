import * as UserDAO from '../dao/User.js'
import User from '../models/User.js'

export const postNewUser = async (req, res, next) => {
    try {
        const { username, password, user_role } = req.body
        const user = await UserDAO.newUser(
            username,
            password,
            user_role
        )

        res.status(200).json({
            message: 'User berhasil dibuat',
            data: {
                user
            }
        })

    } catch (error) {
        next(error)
    }
}

export const getAllUser = async (req, res, next) => {
    try {
        const user = await UserDAO.findAllUser()
        res.status(200).json({
            message: 'Get all user success',
            data: {
                user
            }
        })
    } catch (error) {
        next(error)
    }
}

// export const getRoleByUsername = async (req, res, next) => {
//     try {
//         const { username } = req.params
//         const usernameRole = await UserDAO.findRoleByUsername(username)
//         res.status(200).json({
//             message: 'Get user_role By username success',
//             data: {
//                 usernameRole
//             }
//         })
//     } catch (error) {
//         next(error)
//     }
// }

export const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await UserDAO.findUserById(id)
        res.status(200).json({
            message: 'Get user by id success',
            data: {
                user
            }
        })
    } catch (error) {
        next(error)
    }
}

export const getUserByUsername = async (req, res, next) => {
    try {
        const { username } = req.params
        const user = await UserDAO.findUserByUsername(username)
        res.status(200).json({
            message: 'Get user by username success',
            data: {
                user
            }
        })
    } catch (error) {
        next(error)
    }
}

export const updateUserById = async (req, res, next) => {
    try {
        const { id } = req.params
        const updatePassword = await UserDAO.updateUser(id, req.body.username, req.body.password, req.body.user_role)
        if (updatePassword == 1){
            const user = await UserDAO.findUserById(id)
            res.status(200).json({
                message: 'User berhasil diupdate',
                data: {
                    user
                }
            })
        }
        else{
            const error = new Error('Update user gagal')
            throw error
        }
    } catch (error) {
        next(error)
    }
}

export const updatePasswordByUsername = async (req, res, next) => {
    try {
        const { username } = req.params
        const updatePassword = await UserDAO.updatePassword(username, req.body.password)
        if (updatePassword == 1){
            const user = await UserDAO.findUserByUsername(username)
            res.status(200).json({
                message: 'Password berhasil diupdate',
                data: {
                    user
                }
            })
        }
        else{
            const error = new Error('Change password gagal')
            throw error
        }
    } catch (error) {
        next(error)
    }
}

export const deleteUserById = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await UserDAO.deleteUserById(id)
        if (result == 1) {
            res.status(200).json({
                message: 'Delete user berhasil'
            })
        } else {
            const error = new Error('Delete user gagal')
            throw error
        }
    } catch (error) {
        next(error)
    }
}

export const deleteUserByUsername = async (req, res, next) => {
    try {
        const { username } = req.params
        const result = await UserDAO.deleteUser(username)
        if (result == 1) {
            res.status(200).json({
                message: 'Delete user berhasil'
            })
        } else {
            const error = new Error('Delete user gagal')
            throw error
        }
    } catch (error) {
        next(error)
    }
}