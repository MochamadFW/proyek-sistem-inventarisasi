import * as JadwalKegiatanDAO from '../dao/JadwalKegiatan.js'

export const postNewJadwalKegiatan = async (req, res, next) => {
    try {
        const { tanggal_kegiatan, nama_kegiatan} = req.body
        const jadwal = await JadwalKegiatanDAO.newJadwalKegiatan(
            tanggal_kegiatan,
            nama_kegiatan
        )

        res.status(200).json({
            message: 'Jadwal kegiatan berhasil dibuat',
            data:{
                jadwal
            }
        })
    } catch (error) {
        next(error)
    }
}

export const getAllJadwalKegiatan = async (req, res, next) => {
    try {
        const jadwal = await JadwalKegiatanDAO.findAllJadwalKegiatan()
        res.status(200).json({
            message: 'Get all jadwal kegiatan success',
            data: {
                jadwal
            }
        })
    } catch (error) {
        next(error)
    }
}

export const getJadwalKegiatanById = async (req, res, next) => {
    try {
        const { id } = req.params
        const jadwal = await JadwalKegiatanDAO.findJadwalKegiatanById(id)
        res.status(200).json({
            message: 'Get jadwal kegiatan by id success',
            data:{
                jadwal
            }
        })
    } catch (error) {
        next(error)
    }
}

export const getJadwalKegiatanByTanggal = async (req, res, next) => {
    try {
        const { tanggal_kegiatan } = req.params
        const jadwal = await JadwalKegiatanDAO.findJadwalKegiatanByTanggal(tanggal_kegiatan)
        res.status(200).json({
            message: 'Get jadwal kegiatan by tanggal success',
            data:{
                jadwal
            }
        })
    } catch (error) {
        next(error)
    }
}

export const getJadwalKegiatanByNama = async (req, res, next) => {
    try {
        const { nama_kegiatan } = req.params
        const jadwal = await JadwalKegiatanDAO.findJadwalKegiatanByNama(nama_kegiatan)
        res.status(200).json({
            message: 'Get jadwal kegiatan by nama success',
            data: {
                jadwal
            }
        })
    } catch (error) {
        next(error)
    }
}

export const updateJadwalKegiatanById = async (req, res, next) => {
    try {
        const { id } = req.params
        const updateJadwalKegiatan = await JadwalKegiatanDAO.updateJadwalKegiatanById(id, req.body.tanggal_kegiatan, req.body.nama_kegiatan)
        if (updateJadwalKegiatan == 1){
            const jadwal = await JadwalKegiatanDAO.findJadwalKegiatanById(id)
            res.status(200).json({
                message: 'Jadwal kegiatan berhasil diupdate',
                data: {
                    jadwal
                }
            })
        } else {
            const error = new Error('Jadwal kegiatan gagal diupdate')
            throw error
        }
    } catch (error) {
        next(error)
    }
}

export const deleteJadwalKegiatanById = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await JadwalKegiatanDAO.deleteJadwalKegiatanById(id)
        if(result == 1){
            res.status(200).json({
                message: 'Delete jadwal kegiatan berhasil'
            })
        } else {
            const error = new Error('Delete jadwal kegiatan gagal')
            throw error
        }
    } catch (error) {
        next(error)
    }
}