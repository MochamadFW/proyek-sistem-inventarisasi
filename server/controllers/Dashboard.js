import * as BarangDAO from '../dao/Barang.js'
import * as RuanganDAO from '../dao/Ruangan.js'
import * as PermintaanDAO from '../dao/Permintaan_Perbaikan.js'

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