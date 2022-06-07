import * as RuanganDAO from '../dao/Ruangan.js'
import Ruangan from '../models/Ruangan.js'

export const postNewRuangan = async (req, res, next) => {
    try {
        const { kode_ruangan, nomor_register, nama_ruangan, luas_lantai, kode_barang, nama_barang, tipe_barang, nomor_seri_pabrik, ukuran_barang, bahan_barang, tahun_perolehan, jumlah_barang, harga_barang, keadaan_barang, keterangan_barang, asal_usul } = req.body
        const ruangan = await RuanganDAO.newRuangan(
            kode_ruangan,
            nomor_register,
            nama_ruangan,
            luas_lantai,
            kode_barang,
            nama_barang,
            tipe_barang,
            nomor_seri_pabrik,
            ukuran_barang,
            bahan_barang,
            tahun_perolehan,
            jumlah_barang,
            harga_barang,
            keadaan_barang,
            keterangan_barang,
            asal_usul
        )
        console.log(nomor_register)

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
        const ruangan = await RuanganDAO.findRuanganByKoderuangan(kode_ruangan)
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

export const getNamaBarangByNamaRuangan = async (req, res, next) => {
    try {
        const { nama_ruangan } = req.params
        const namaBarang = await RuanganDAO.findNamaBarangByNamaRuangan(nama_ruangan)
        res.status(200).json({
            data: {
                namaBarang
            }
        })
    } catch (error) {
        next(error)
    }
}

export const getJumlahBarangByNamaBarang = async (req, res, next) => {
    try {
        const { nama_ruangan, nama_barang } = req.params
        const jumlahBarang = await RuanganDAO.findJumlahBarangByNamaBarang(nama_ruangan, nama_barang)
        res.status(200).json({
            data: {
                jumlahBarang
            }
        })
    } catch (error) {
        next(error)
    }
}

export const updateRuanganById = async (req, res, next) => {
    try {
        const { id } = req.params
        const updateRuangan = await RuanganDAO.updateRuangan(id, req.body.kode_ruangan, req.body.nomor_resgister, req.body.nama_ruangan, req.body.luas_lantai, req.body.kode_barang, 
            req.body.nama_barang, req.body.tipe_barang, req.nomor_seri_pabrik, req.body.ukuran_barang, req.body.bahan_barang, req.body.tahun_perolehan, req.body.jumlah_barang, 
            req.body.harga_barang, req.body.keadaan_barang, req.body.keterangan_barang, req.body.asal_usul)
        if (updateRuangan == 1 ) {
            const ruangan = await RuanganDAO.findRuanganById(id)
            res.status(200).json({
                message: 'Ruangan berhasil diperbaharui',
                data: ruangan
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

export const jumlahHargaByNamaRuangan = async (req, res, next) => {
    try {
        const { nama_ruangan } = req.params
        const jumlahHargaByNamaRuangan = await RuanganDAO.countJumlahHargaByRuangan(nama_ruangan)
        console.log(jumlahHargaByNamaRuangan)
        res.status(200).json({
            data: {
                jumlahHargaByNamaRuangan
            }
        })
    } catch (error) {
        next(error)
    }
}

export const jumlahHargaAllRuangan = async (req, res, next) => {
    try {
        const jumlahHargaAllRuangan = await RuanganDAO.countJumlahHargaAllRuangan()
        console.log(jumlahHargaAllRuangan)
        res.status(200).json({
            data: {
                jumlahHargaAllRuangan
            }
        })
    } catch (error) {
        next(error)
    }
}