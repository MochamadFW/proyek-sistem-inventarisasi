import Sequelize from 'sequelize'
import db from '../db.js'

const Ruangan = db.define('Ruangan', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    kode_ruangan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    nama_ruangan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    luas_lantai: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kode_barang: {
        type: Sequelize.STRING,
        allowNull: true
    },
    nama_barang: {
        type: Sequelize.STRING,
        allowNull: true
    },
    tipe_barang: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ukuran_barang: {
        type: Sequelize.STRING,
        allowNull: true
    },
    bahan_barang: {
        type: Sequelize.STRING,
        allowNull: true
    },
    tahun_perolehan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    jumlah_barang: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    harga_barang: {
        type: Sequelize.REAL,
        allowNull: true
    },
    keterangan_barang: {
        type: Sequelize.STRING,
        allowNull: true
    },
    nomor_register: {
        type: Sequelize.INTEGER,
        allowNull: true
        // autoIncrement: true
    }
})

export default Ruangan