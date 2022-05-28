import Ruangan from '../models/Ruangan.js'

export const newRuangan = async (KODE_RUANGAN, NAMA_RUANGAN, LUAS_LANTAI, KODE_BARANG, NAMA_BARANG, TIPE_BARANG, UKURAN_BARANG, BAHAN_BARANG, TAHUN_PEROLEHAN, JUMLAH_BARANG, HARGA_BARANG, KETERANGAN_BARANG, NOMOR_REGISTER) => {
    try {
        const ruangan = await Ruangan.create({
            nomor_register: NOMOR_REGISTER,
            kode_ruangan: KODE_RUANGAN,
            nama_ruangan: NAMA_RUANGAN,
            luas_lantai: LUAS_LANTAI,
            kode_barang: KODE_BARANG,
            nama_barang: NAMA_BARANG,
            tipe_barang: TIPE_BARANG,
            ukuran_barang: UKURAN_BARANG,
            bahan_barang: BAHAN_BARANG,
            tahun_perolehan: TAHUN_PEROLEHAN,
            jumlah_barang: JUMLAH_BARANG,
            harga_barang: HARGA_BARANG,
            keterangan_barang: KETERANGAN_BARANG
        })
        return ruangan
    } catch (error) {
        console.log(error)
    }
}

export const findAllRuangan = async () => {
    try {
        const ruangan = await Ruangan.findAll()
        return ruangan
    } catch (error) {
        console.log(error)
    }
}

export const findRuanganById = async (ID) => {
    try {
        const ruangan = await Ruangan.findOne({
            where: {
                id: ID
            }
        })
        return ruangan
    } catch (error) {
        console.log(error)
    }
}

export const findRuanganByKoderuangan = async (KODE_RUANGAN) => {
    try {
        const ruangan = await Ruangan.findOne({
            where:{
                kode_ruangan: KODE_RUANGAN
            }
        })
        return ruangan
    } catch (error) {
        console.log(error)
    }
}

export const updateRuangan = async (ID, KODE_RUANGAN, NAMA_RUANGAN, LUAS_LANTAI, KODE_BARANG, NAMA_BARANG, TIPE_BARANG, UKURAN_BARANG, BAHAN_BARANG, TAHUN_PEROLEHAN, JUMLAH_BARANG, HARGA_BARANG, KETERANGAN_BARANG, UPDATEDAT) => {
    try {
        const ruangan = await Ruangan.update(
            {
                kode_ruangan: KODE_RUANGAN,
                nama_ruangan: NAMA_RUANGAN,
                luas_lantai: LUAS_LANTAI,
                kode_barang: KODE_BARANG,
                nama_barang: NAMA_BARANG,
                tipe_barang: TIPE_BARANG,
                ukuran_barang: UKURAN_BARANG,
                bahan_barang: BAHAN_BARANG,
                tahun_perolehan: TAHUN_PEROLEHAN,
                jumlah_barang: JUMLAH_BARANG,
                harga_barang: HARGA_BARANG,
                keterangan_barang: KETERANGAN_BARANG,
                updatedAt: UPDATEDAT
            },
            {
                where: {
                    id: ID
                }
            }
        )
        return ruangan
    } catch (error) {
        console.log(error)
    }
}

export const deleteRuanganById = async (ID) => {
    try {
        const result = await Ruangan.destroy({
            where: {
                id: ID
            }
        })
        return result
    } catch (error) {
        console.log(error)
    }
}

export const deleteRuanganByKoderuangan = async (KODE_RUANGAN) => {
    try {
        const result = await Ruangan.destroy({
            where: {
                kode_ruangan: KODE_RUANGAN
            }
        })
        return result
    } catch (erorr) {
        console.log(error)
    }
}