import * as BarangDAO from '../dao/Barang.js'
import * as RuanganDAO from '../dao/Ruangan.js'

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