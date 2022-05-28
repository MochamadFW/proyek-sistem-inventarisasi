import Sequelize from 'sequelize'
import db from '../db.js'

const JadwalKegiatan = db.define('Jadwal_Kegiatan',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    tanggal_kegiatan: {
        type: Sequelize.DATE
    },
    nama_kegiatan: {
        type: Sequelize.STRING
    }
})

export default JadwalKegiatan