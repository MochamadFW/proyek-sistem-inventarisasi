import * as UserDAO from '../dao/User.js'

export const postNewUser = async (req, res, next) => {
    try {
        const { username, password } = req.body
        const user = await UserDAO.newUser(
            username,
            password
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