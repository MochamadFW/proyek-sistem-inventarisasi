import * as RuanganDAO from '../dao/Ruangan.js'

export const postNewRuangan = async (req, res, next) => {
    try {
        const { kode_ruangan, nama_ruangan, luas_lantai, kode_barang, nama_barang, tipe_barang, ukuran_barang, bahan_barang, tahun_perolehan, jumlah_barang, harga_barang, keterangan_barang } = req.body
        const ruangan = await RuanganDAO.newRuangan(
            kode_ruangan,
            nama_ruangan,
            luas_lantai,
            kode_barang,
            nama_barang,
            tipe_barang,
            ukuran_barang,
            bahan_barang,
            tahun_perolehan,
            jumlah_barang,
            harga_barang,
            keterangan_barang
        )

        res.status(200).json({
            message: 'Tabel ruangan berhasil dibuat',
            data: {
                ruangan
            }
        })
    } catch (error) {
        next(error)
    }
}

export const getAllRuangan = async (req, res, next) => {
    try {
        const ruangan = await RuanganDAO.findAllRuangan()
        res.status(200).json({
            message: 'Get all ruangan berhasil',
            data: {
                ruangan
            }
        })
    } catch (error) {
        next(error)
    }
}

export const getRuanganById = async (req, res, next) => {
    try {
        const { id } = req.params
        const ruangan = await RuanganDAO.findRuanganById(id)
        res.status(200).json({
            message: 'Get ruangan by ID berhasil',
            data: {
                ruangan
            }
        })
    } catch (error) {
        next(error)
    }
}

export const getRuanganByKoderuangan = async (req, res, next) => {
    try {
        const { kode_ruangan } = req.params
        const ruangan = await RuanganDAO.findRuanganByKoderuangan(kode_ruangann)
        res.status(200).json({
            message: 'Get ruangan by Koderuangan berhasil',
            data: {
                ruangan
            }
        })
    } catch (error) {
        next(error)
    }
}

export const updateRuanganById = async (req, res, next) => {
    try {
        const { id } = req.params
        const updateRuangan = await RuanganDAO.updateRuangan(id, req.body.kode_ruangan, req.body.nama_ruangan, req.body.luas_lantai, req.body.kode_barang, 
            req.body.nama_barang, req.body.tipe_barang, req.body.ukuran_barang, req.body.bahan_barang, req.body.tahun_perolehan, req.body.jumlah_barang, 
            req.body.harga_barang, req.body. keterangan_barang)
        if (updateRuangan == 1 ) {
            res.status(200).json({
                message: 'Ruangan berhasil diperbaharui'
            })
        } else {
            const error = new Error('Ruangan gagal diperbaharui')
            throw error
        }
    } catch (error) {
        next(error)
    }
}

export const deleteRuanganById = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await RuanganDAO.deleteRuanganById(id)
        if (result == 1){
            res.status(200).json({
                message: 'Delete ruangan By id berhasil'
            })
        } else {
            const error = new Error('Delete ruangan By id gagal')
            throw(error)
        }
    } catch (error) {
        next(error)
    }
}

export const deleteRuanganByKoderuangan = async (req, res, next) => {
    try {
        const { kode_ruangan } = req.params
        const result = await RuanganDAO.deleteRuanganByKoderuangan(kode_ruangan)
        if (result == 1){
            res.status(200).json({
                message: 'Delete ruangan By kode ruangan berhasil'
            })
        } else {
            const error = new Error('Delete ruangan By kode ruangan gagal')
            throw error
        }
    } catch (error) {
        next(error)
    }
}