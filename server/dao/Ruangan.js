import Ruangan from '../models/Ruangan.js'

export const newRuangan = async (kode_ruangan, nama_ruangan, luas_lantai) => {
    try {
        const ruangan = await Ruangan.create({
            kode_ruangan: kode_ruangan,
            nama_ruangan: nama_ruangan,
            luas_lantai: luas_lantai
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

export const findRuanganByKoderuangan = async (kode_ruangan) => {
    try {
        const ruangan = await Ruangan.findOne({
            where:{
                kode_ruangan: kode_ruangan
            }
        })
        return ruangan
    } catch (error) {
        console.log(error)
    }
}

export const updateRuangan = async (id, kode_ruangan, nama_ruangan, luas_lantai) => {
    try {
        const ruangan = await Ruangan.update(
            {
                kode_ruangan: kode_ruangan,
                nama_ruangan: nama_ruangan,
                luas_lantai: luas_lantai
            },
            {
                where: {
                    id: id
                }
            }
        )
        return ruangan
    } catch (error) {
        console.log(error)
    }
}

export const deleteRuangan = async (kode_ruangan) => {
    try {
        const result = await Ruangan.destroy({
            where: {
                kode_ruangan: kode_ruangan
            }
        })
        return result
    } catch (error) {
        console.log(error)
    }
}