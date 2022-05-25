import { updatePasswordByUsername } from '../controllers/User.js'
import User from '../models/User.js'

export const newUser = async (username, password, user_role) => {
    try {
        const user = await User.create({
            username: username,
            password: password,
            user_role: user_role
        })
        return user
    } catch (error) {
        console.log(error)
    }
}

export const findAllUser = async () => {
    try {
        const user = await User.findAll()
        return user
    } catch (error) {
        console.log(error)
    }
}

export const findUserByUsername = async (USERNAME) => {
    try {
        const user = await User.findOne({
            where: {
                username: USERNAME
            }
        })
        return user
    } catch (error) {
        console.log(error)
    }
}

export const updatePassword = async (USERNAME, PASSWORD, updatedAt) => {
    try {
        const user = await User.update(
            {
                password: PASSWORD,
                updatedAt: updatedAt
            },
            {
                where: {
                    username: USERNAME
                }
            }
        )
        return user
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (USERNAME) => {
    try {
        const result = await User.destroy({
            where: {
                username: USERNAME
            }
        })
        return result
    } catch (error) {
        console.log(error)
    }
}