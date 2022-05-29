import * as BarangDAO from '../dao/Barang.js'
import * as RuanganDAO from '../dao/Ruangan.js'
import * as PermintaanDAO from '../dao/Permintaan_Perbaikan.js'
import * as UserDAO from '../dao/User.js'
import User from '../models/User.js'

export const countTotalAset = async (req, res, next) => {
    try {
        const barang = await BarangDAO.countBarang()
        const ruangan = await RuanganDAO.countRuangan()
        const totalAset = barang + ruangan
        res.status(200).json({
            message: 'Get total aset success',
            data: {
                totalAset
            }
        })
    } catch (error) {
        next(error)
    }
}

export const countTotalPermintaan = async (req, res, next) => {
    try {
        const totalPermintaan = await PermintaanDAO.countPermintaan()
        res.status(200).json({
            message: 'Get total permintaan success',
            data: {
                totalPermintaan
            }
        })
    } catch (error) {
        next(error)
    }
}

export const countTotalLogin = async (req, res, next) => {
    try {
        const { username, password, total_login } = req.body
        const totalLogin = await UserDAO.userLoginValidation(username, password)
        if (totalLogin == 1) {
            var jumlahLogin = total_login + 1
            res.status(200).json({
                message: 'Login success & total_login + 1',
                data: {
                    jumlahLogin
                }
            })
        }
    } catch (error) {
        next(error)
    }
}

export const getTotalLogin = async (req, res, next) => {
    try {
        const { username } = req.params 
        const totalLogin = await UserDAO.getTotalLogin(username)
        res.status(200).json({
            message: 'Get total login success',
            data: {
                totalLogin
            }
        })
    } catch (error) {
        next(error)
    }
}