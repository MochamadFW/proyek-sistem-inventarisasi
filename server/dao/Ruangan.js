import sequelize from '../db.js'
import Ruangan from '../models/Ruangan.js'

export const newRuangan = async (KODE_RUANGAN, NOMOR_REGISTER, NAMA_RUANGAN, LUAS_LANTAI, KODE_BARANG, NAMA_BARANG, TIPE_BARANG, NOMOR_SERI_PABRIK, UKURAN_BARANG, BAHAN_BARANG, TAHUN_PEROLEHAN, JUMLAH_BARANG, HARGA_BARANG, KEADAAN_BARANG, KETERANGAN_BARANG, ASAL_USUL) => {
    try {
        const ruangan = await Ruangan.create({
            kode_ruangan: KODE_RUANGAN,
            nomor_register: NOMOR_REGISTER,
            nama_ruangan: NAMA_RUANGAN,
            luas_lantai: LUAS_LANTAI,
            kode_barang: KODE_BARANG,
            nama_barang: NAMA_BARANG,
            tipe_barang: TIPE_BARANG,
            nomor_seri_pabrik: NOMOR_SERI_PABRIK,
            ukuran_barang: UKURAN_BARANG,
            bahan_barang: BAHAN_BARANG,
            tahun_perolehan: TAHUN_PEROLEHAN,
            jumlah_barang: JUMLAH_BARANG,
            harga_barang: HARGA_BARANG,
            keadaan_barang: KEADAAN_BARANG,
            keterangan_barang: KETERANGAN_BARANG,
            asal_usul: ASAL_USUL
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
        const ruangan = await Ruangan.findAll({
            where:{
                kode_ruangan: KODE_RUANGAN
            }
        })
        return ruangan
    } catch (error) {
        console.log(error)
    }
}

export const findNamaBarangByNamaRuangan = async (NAMA_RUANGAN) => {
    try {
        const namaBarang = await Ruangan.findAll({
            // attributes: ['nama_barang'],
            where: {
                nama_ruangan: NAMA_RUANGAN
            }
        })
        return namaBarang
    } catch (error) {
        console.log(error)
    }
}

export const findJumlahBarangByNamaBarang = async (NAMA_RUANGAN, NAMA_BARANG) => {
    try {
        var penjumlahan = sequelize.col('Ruangan.jumlah_barang')
        console.log(NAMA_RUANGAN, NAMA_BARANG)
        const jumlahBarang = await Ruangan.findAll({
            attributes: [
                [sequelize.fn('SUM', penjumlahan), 'SUM']
            ],
            raw: true,
            where: {
                nama_ruangan: NAMA_RUANGAN,
                nama_barang: NAMA_BARANG
            },
            group: ['Ruangan.nama_barang']
        })
        return jumlahBarang
    } catch (error) {
        
    }
}

export const updateRuangan = async (ID, KODE_RUANGAN, NOMOR_REGISTER, NAMA_RUANGAN, LUAS_LANTAI, KODE_BARANG, NAMA_BARANG, TIPE_BARANG, NOMOR_SERI_PABRIK, UKURAN_BARANG, BAHAN_BARANG, TAHUN_PEROLEHAN, JUMLAH_BARANG, HARGA_BARANG, KEADAAN_BARANG, KETERANGAN_BARANG, ASAL_USUL, UPDATEDAT) => {
    try {
        const ruangan = await Ruangan.update(
            {
                kode_ruangan: KODE_RUANGAN,
                nomor_register: NOMOR_REGISTER,
                nama_ruangan: NAMA_RUANGAN,
                luas_lantai: LUAS_LANTAI,
                kode_barang: KODE_BARANG,
                nama_barang: NAMA_BARANG,
                tipe_barang: TIPE_BARANG,
                nomor_seri_pabrik: NOMOR_SERI_PABRIK,
                ukuran_barang: UKURAN_BARANG,
                bahan_barang: BAHAN_BARANG,
                tahun_perolehan: TAHUN_PEROLEHAN,
                jumlah_barang: JUMLAH_BARANG,
                harga_barang: HARGA_BARANG,
                keadaan_barang: KEADAAN_BARANG,
                keterangan_barang: KETERANGAN_BARANG,
                asal_usul: ASAL_USUL,
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
    } catch (error) {
        console.log(error)
    }
}

export const countRuangan = async () => {
    try {
        const jumlah = await Ruangan.count()
        return jumlah
    } catch (error) {
        console.log(error)
    }
}

export const countJumlahHargaByRuangan = async (NAMA_RUANGAN) => {
    try {
        const jumlah = await Ruangan.findAll({
            attributes: ['nama_ruangan',[sequelize.fn('sum', sequelize.col('harga_barang')), 'Jumlah']],
            raw: true,
            where: {
                nama_ruangan: NAMA_RUANGAN
            },
            group : ['Ruangan.nama_ruangan']
        })
        return jumlah
    } catch (error) {
        console.log(error)
    }
}

export const countJumlahHargaAllRuangan = async () => {
    try {
        const jumlah = await Ruangan.findAll({
            attributes: [[sequelize.fn('sum', sequelize.col('harga_barang')), 'Jumlah']],
            raw: true
        })
        return jumlah
    } catch (error) {
        
    }
}