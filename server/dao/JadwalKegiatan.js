import JadwalKegiatan from '../models/JadwalKegiatan.js'

export const newJadwalKegiatan = async (tanggal_kegiatan, nama_kegiatan) => {
    try {
        const jadwal = await JadwalKegiatan.create({
            tanggal_kegiatan: tanggal_kegiatan,
            nama_kegiatan: nama_kegiatan
        })
        return jadwal
    } catch (error) {
        console.log(error)
    }
}

export const findAllJadwalKegiatan = async () => {
    try {
        const jadwal = await JadwalKegiatan.findAll()
        return jadwal
    } catch (error) {
        console.log(error)
    }
}

export const findJadwalKegiatanById = async (id) => {
    try {
        const jadwal = await JadwalKegiatan.findAll({
            where: {
                id: id
            }
        })
        return jadwal
    } catch (error) {
        console.log(error)
    }
}

export const findJadwalKegiatanByTanggal = async (tanggal_kegiatan) => {
    try {
        const jadwal = await JadwalKegiatan.findAll({
            where: {
                tanggal_kegiatan: tanggal_kegiatan
            }
        })
        return jadwal
    } catch (error) {
        console.log(error)
    }
}

export const findJadwalKegiatanByNama = async (nama_kegiatan) => {
    try {
        const jadwal = await JadwalKegiatan.findAll({
            where: {
                nama_kegiatan: nama_kegiatan
            }
        })
        return jadwal
    } catch (error) {
        console.log(error)
    }
}

export const updateJadwalKegiatanById = async (id, tanggal_kegiatan, nama_kegiatan, updatedAt) => {
    try {
        const jadwal = await JadwalKegiatan.update(
            {
                tanggal_kegiatan: tanggal_kegiatan,
                nama_kegiatan: nama_kegiatan,
                updatedAt: updatedAt
            },
            {
                where: {
                    id: id
                }
            }
        )
        return jadwal
    } catch (error) {
        console.log(error)
    }
}

export const deleteJadwalKegiatanById = async (id) => {
    try {
        const result = await JadwalKegiatan.destroy({
            where: {
                id: id
            }
        })
        return result
    } catch (error) {
        console.log(error)
    }
}