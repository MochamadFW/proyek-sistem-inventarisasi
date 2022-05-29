import * as UserDAO from '../dao/User.js'

export const getLoginValidation = async (req, res, next) => {
    try {
        const { username, password } = req.body
        const userValidation = await UserDAO.userLoginValidation(username, password)
        var TOTAL_LOGIN = userValidation.total_login + 1
        const updateTotalLogin = await UserDAO.countLogin(username, password, TOTAL_LOGIN)
        console.log(updateTotalLogin)
        if (updateTotalLogin == 1){
            const user = await UserDAO.userLoginValidation(username, password)
            res.status(200).json({
                message: 'Login validated & total_login + 1',
                data: {
                    user
                }
            })
        }

        
        // if (userRole == 1) {
        //     const updateTotalLogin = await UserDAO.countLogin(id, req.body.total_login)
        //     if (updateTotalLogin == 1) {
        //         res.status(200).json({
        //             message: 'Login validated & total_login + 1',
        //         })
        //     } else {
        //         const error = new Error('Penambahan total login gagal diperbaharui')
        //         throw error
        //     }
        //}

    } catch (error) {
        next(error)
    }
}

