import * as RuanganDAO from '../dao/Ruangan.js'

export const postNewRuangan = async (req, res, next) => {
    try {
        const { kode_ruangan, nama_ruangan, luas_lantai } = req.body
        const ruangan = await RuanganDAO.newRuangan(
            kode_ruangan,
            nama_ruangan,
            luas_lantai
        )

        res.status(200).json({
            message: 'Ruangan berhasil dibuat',
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
            message: 'Get all ruangan success',
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
        const ruangan = await RuanganDAO.findRuanganByKoderuangan(kode_ruangan)
        res.status(200).json({
            message: 'Get ruangan by koderuangan success',
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
        const updateRuangan = await RuanganDAO.updateRuangan(id, req.body.kode_ruangan, req.body.nama_ruangan, req.body.luas_lantai)
        if (updateRuangan == 1 ) {
            res.status(200).json({
                message: 'Ruangan berhasil diupdate'
            })
        } else {
            const error = new Error('Ruangan gagal diupdate')
            throw error
        }
    } catch (error) {
        next(error)
    }
}

export const deleteRuanganByKoderuangan = async (req, res, next) => {
    try {
        const { kode_ruangan } = req.params
        const result = await RuanganDAO.deleteRuangan(kode_ruangan)
        if (result == 1){
            res.status(200).json({
                message: 'Delete ruangan berhasil'
            })
        } else {
            const error = new Error('Delete ruangan gagal')
            throw error
        }
    } catch (error) {
        next(error)
    }
}