import * as permintaanDAO from "../dao/Permintaan_Perbaikan"

export const postNewPermintaan = async (req, res, next) => {
    try {
        const { nama_pengaju, nama_ruangan, nama_barang, jumlah_barang, jenis_kerusakan, 
            keterangan_barang } = req.body
        const permintaan = await permintaanDAO.newPermintaan(
            nama_pengaju, nama_ruangan, nama_barang, jumlah_barang, jenis_kerusakan, keterangan_barang
        )
        res.status(200).json({
            message: 'Permintaan perbaikan berhasil ditambahkan.',
            data: {
                permintaan
            }
        })
    } catch (error) {
        next(error)
    }
}

export const getAllPermintaan = async (req, res, next) => {
    try {
        const permintaan = await permintaanDAO.findAllPermintaan()
        res.status(200).json({
            message: 'Get All permintaan berhasil.',
            data: {
                permintaan
            }
        })
    } catch (error) {
        next(error)
    }
}

export const getPermintaanById = async (req, res, next) => {
    try {
        const { id } = req.params
        const permintaan = await permintaanDAO.findPermintaanById(id)
        res.status(200).json({
            message: 'Get permintaan By Id berhasil.',
            data: {
                permintaan
            }
        })
    } catch (error) {
        next(error)
    }
}

export const getPermintaanByPengaju = async (req, res, next) => {
    try {
        const { nama_pengaju } = req.params
        const permintaan = await permintaanDAO.findPermintaanByPengaju(nama_pengaju)
        res.status(200).json({
            message: 'Get permintaan By Nama Pengaju berhasil.',
            data: {
                permintaan
            }
        })
    } catch (error) {
        next(error)
    }
}

// export const updatePermintaanById = async (req, res, next) => {
//     try {
//         const { id } = req.params
//         const updateBarang = await BarangDAO.updateBarang(id, req.body.kode_barang, req.body.nama_barang, req.body.nomor_register, 
//             req.body.tipe_barang, req.body.ukuran_barang, req.body.bahan_barang, req.body.tahun_pembelian, req.body.nomor_pabrik, 
//             req.body.nomor_rangka, req.body.nomor_mesin, req.body.nomor_polisi, req.body.nomor_bpkb, req.body.asal_usul, req.body.harga_barang, req.body.keadaan_barang, req.body.keterangan)
//         if (updateBarang == 1){
//             res.status(200).json({
//                 message: 'Barang berhasil diupdate'
//             })
//         } else {
//             const error = new Error('Barang gagal diupdate')
//             throw error
//         }
//     } catch (error) {
//         next(error)
//     }
// }

export const deletePemrintaanById = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await permintaanDAO.deletePermintaan(id)
        if (result == 1) {
            res.status(200).json({
                message: 'Delete permintaan By Id berhasil.'
            })
        } else {
            const error = new Error('Delete permintaan By Id gagal')
            throw error
        }
    } catch (error) {
        next(error)
    }
}