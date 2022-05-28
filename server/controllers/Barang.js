import * as BarangDAO from '../dao/Barang.js'

export const postNewBarang = async (req, res, next) => {
    try {
        const { kode_barang, nama_barang, nomor_register, 
            tipe_barang, ukuran_barang, bahan_barang, tahun_pembelian, nomor_pabrik, 
            nomor_rangka, nomor_mesin, nomor_polisi, nomor_bpkb, asal_usul, harga_barang, keadaan_barang, keterangan } = req.body
        const barang = await BarangDAO.newBarang(
            kode_barang, nama_barang, nomor_register, 
            tipe_barang, ukuran_barang, bahan_barang, tahun_pembelian, nomor_pabrik, 
            nomor_rangka, nomor_mesin, nomor_polisi, nomor_bpkb, asal_usul, harga_barang, keadaan_barang, keterangan
        )

        res.status(200).json({
            message: 'Barang berhasil ditambahkan',
            data: {
                barang
            }
        })
    } catch (error) {
        next(error)
    }
}

export const getAllBarang = async (req, res, next) => {
    try {
        const barang = await BarangDAO.findAllBarang()
        res.status(200).json({
            message: 'Get all barang success',
            data: {
                barang
            }
        })
    } catch (error) {
        next(error)
    }
}

export const getBarangByKodebarang = async (req, res, next) => {
    try {
        const { kode_barang } = req.params
        const barang = await BarangDAO.findBarangByKodebarang(kode_barang)
        res.status(200).json({
            message: 'Get Barang by Kodebarang succcess',
            data: {
                barang
            }
        })
    } catch (error) {
        next(error)
    }
}

export const updateBarangById = async (req, res, next) => {
    try {
        const { id } = req.params
        const updateBarang = await BarangDAO.updateBarang(id, req.body.kode_barang, req.body.nama_barang, req.body.nomor_register, 
            req.body.tipe_barang, req.body.ukuran_barang, req.body.bahan_barang, req.body.tahun_pembelian, req.body.nomor_pabrik, 
            req.body.nomor_rangka, req.body.nomor_mesin, req.body.nomor_polisi, req.body.nomor_bpkb, req.body.asal_usul, req.body.harga_barang, req.body.keadaan_barang, req.body.keterangan)
        if (updateBarang == 1){
            res.status(200).json({
                message: 'Barang berhasil diupdate'
            })
        } else {
            const error = new Error('Barang gagal diupdate')
            throw error
        }
    } catch (error) {
        next(error)
    }
}

export const deleteBarangByKodebarang = async (req, res, next) => {
    try {
        const { kode_barang } = req.params
        const result = await BarangDAO.deleteBarang(kode_barang)
        if (result == 1) {
            res.status(200).json({
                message: 'Delete barang berhasil'
            })
        } else {
            const error = new Error('Detele barang gagal')
            throw error
        }
    } catch (error) {
        next(error)
    }
}