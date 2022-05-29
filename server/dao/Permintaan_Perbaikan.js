import Permintaan_Perbaikan from "../models/Permintaan_Perbaikan"

export const newPermintaan = async (nama_pengaju, tanggal_permintaan, jumlah_barang, keterangan_barang, nama_barang, keberadaan_aset, jenis_kerusakan) => {
    try {
        const permintaan = await Permintaan_Perbaikan.create({
            nama_pengaju: nama_pengaju,
            tanggal_permintaan: tanggal_permintaan,
            jumlah_barang: jumlah_barang,
            keterangan_barang: keterangan_barang,
            nama_barang: nama_barang,
            keberadaan_aset: keberadaan_aset,
            jenis_kerusakan: jenis_kerusakan
        })
        return permintaan
    } catch (error) {
        console.log(error)
    }
}

export const findAllPermintaan = async () => {
    try {
        const permintaan = await Permintaan_Perbaikan.findAll()
        return permintaan
    } catch (error) {
        console.log(error)
    }
}

export const findPermintaanById = async (ID) => {
    try {
        const permintaan = await Permintaan_Perbaikan.findOne({
            where:{
                id: ID
            }
        })
        return permintaan
    } catch (error) {
        console.log(error)
    }
}

export const findPermintaanByPengaju = async (NAMA_PENGAJU) => {
    try {
        const permintaan = await Permintaan_Perbaikan.findOne({
            where:{
                nama_pengaju: NAMA_PENGAJU
            }
        })
        return permintaan
    } catch (error) {
        console.log(error)
    }
}

// export const updateRuangan = async (id, kode_ruangan, nama_ruangan, luas_lantai) => {
//     try {
//         const ruangan = await Ruangan.update(
//             {
//                 kode_ruangan: kode_ruangan,
//                 nama_ruangan: nama_ruangan,
//                 luas_lantai: luas_lantai
//             },
//             {
//                 where: {
//                     id: id
//                 }
//             }
//         )
//         return ruangan
//     } catch (error) {
//         console.log(error)
//     }
// }

export const deletePermintaan = async (ID) => {
    try {
        const result = await Permintaan_Perbaikan.destroy({
            where: {
                id: ID
            }
        })
        return result
    } catch (error) {
        console.log(error)
    }
}

export const countPermintaan = async () => {
    try {
        const jumlah = await Permintaan_Perbaikan.count()
        return jumlah
    } catch (error) {
        console.log(error)
    }
}