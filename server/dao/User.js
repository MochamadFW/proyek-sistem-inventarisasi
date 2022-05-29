import User from '../models/User.js'
import Sequelize from 'sequelize'

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

export const findUserByRole = async (USER_ROLE) => {
    try {
        const user = await User.findOne({
            where: {
                user_role: USER_ROLE
            }
        })
        return user
    } catch (error) {
        console.log(error)
    }
}

export const userLoginValidation = async (USERNAME, PASSWORD) => {
    try {
        const user = await User.findOne({
            attributes: ['total_login','user_role'],
            where: {
                username: USERNAME,
                password: PASSWORD
            }
        })
        return user
    } catch (error) {
        console.log(error)
    }
}

export const countLogin = async (USERNAME, PASSWORD, TOTAL_LOGIN, updatedAt) => {
    try {
        // const jumlahLogin = await User.update({
        //     attributes: [[Sequelize.literal('total_login + 1'), 'total_login']],
        //     updatedAt: updatedAt,
        //     where: {
        //         username: USERNAME,
        //         password: PASSWORD
        //     }
        // })
        const jumlahLogin = await User.update(
            {
                total_login: TOTAL_LOGIN,
                updateAt: updatedAt
            },
            {
                where: {
                    username: USERNAME,
                    password: PASSWORD
                }
            }
        )
        return jumlahLogin
    } catch (error) {
        console.log(error)
    }
}

// export const findRoleByUsername = async (USERNAME) => {
//     try {
//         const user = await User.findOne({
//             attributes: ['user_role'],
//             where: {
//                 username: USERNAME
//             }
//         })
//         return user
//     } catch (error) {

//     }
// }

export const findUserByUsername = async (USERNAME) => {
    try {
        const user = await User.findOne({
            where: {
                username: USERNAME
            }
        })
        if (user)
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