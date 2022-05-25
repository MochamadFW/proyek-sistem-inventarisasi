import User from '../models/User.js'

export const newUser = async (username, password) => {
    try {
        const user = await User.create({
            username: username,
            password: password
        })
        return user
    } catch (error) {
        console.log(error)
    }
}