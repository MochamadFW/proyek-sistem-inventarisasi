import Barang from '../models/Barang'

export const newBarang = async (kode_barang, nama_barang, nomor_register, 
    tipe_barang, ukuran_barang, bahan_barang, tahun_pembelian, nomor_pabrik, 
    nomor_rangka, nomor_mesin, nomor_polisi, nomor_bpkb, asal_usul, harga_barang, keadaan_barang, keterangan_barang) => {
    try {
        const barang = await Barang.create({
            kode_barang: kode_barang, 
            nama_barang: nama_barang, 
            nomor_register: nomor_register, 
            tipe_barang: tipe_barang, 
            ukuran_barang: ukuran_barang, 
            bahan_barang: bahan_barang, 
            tahun_pembelian: tahun_pembelian, 
            nomor_pabrik: nomor_pabrik, 
            nomor_rangka: nomor_rangka, 
            nomor_mesin: nomor_mesin, 
            nomor_polisi: nomor_polisi, 
            nomor_bpkb: nomor_bpkb, 
            asal_usul: asal_usul, 
            harga_barang: harga_barang,
            keadaan_barang: keadaan_barang,
            keterangan_barang: keterangan_barang
        })
        return barang
    } catch (error) {
        console.log(error)
    }
}

export const findAllBarang = async () => {
    try {
        const barang = await Barang.findAll()
        return barang
    } catch (error) {
        console.log(error)
    }
}

export const findBarangById = async (id) => {
    try {
        const barang = await Barang.findOne({
            where: {
                id: id
            }
        })
        return barang
    } catch (error) {
        console.log(error)
    }
}

export const findBarangByKodebarang = async (kode_barang) => {
    try {
        const barang = await Barang.findOne({
            where: {
                kode_barang: kode_barang
            }
        })
        return barang
    } catch (error) {
        console.log(error)
    }
}

export const updateBarang = async (id, kode_barang, nama_barang, nomor_register, 
    tipe_barang, ukuran_barang, bahan_barang, tahun_pembelian, nomor_pabrik, 
    nomor_rangka, nomor_mesin, nomor_polisi, nomor_bpkb, asal_usul, harga_barang, keadaan_barang, keterangan_barang, updatedAt) => {
    try {
        const barang = await Barang.update({
            kode_barang: kode_barang, 
            nama_barang: nama_barang, 
            nomor_register: nomor_register, 
            tipe_barang: tipe_barang, 
            ukuran_barang: ukuran_barang, 
            bahan_barang: bahan_barang, 
            tahun_pembelian: tahun_pembelian, 
            nomor_pabrik: nomor_pabrik, 
            nomor_rangka: nomor_rangka, 
            nomor_mesin: nomor_mesin, 
            nomor_polisi: nomor_polisi, 
            nomor_bpkb: nomor_bpkb, 
            asal_usul: asal_usul, 
            harga_barang: harga_barang,
            keadaan_barang: keadaan_barang,
            keterangan_barang: keterangan_barang,
            updatedAt: updatedAt
        },
        {
            where: {
                id: id
            }
        })
        return barang
    } catch (error) {
        console.log(error)
    }
}

export const deleteBarang = async (id) => {
    try {
        const result = await Barang.destroy({
            where: {
                id: id
            }
        })
        return result
    } catch (error) {
        console.log(error)
    }
}

export const countBarang = async () => {
    try {
        const jumlah = await Barang.count()
        console.log(jumlah)
        return jumlah
    } catch (error) {
        console.log(error)
    }
}