import Sequelize from 'sequelize'
import db from '../db.js'

const Ruangan = db.define('Ruangan', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nomor_register: {
        type: Sequelize.STRING,
        allowNull: true
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
    nomor_seri_pabrik: {
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
        allowNull: true,
    },
    jumlah_barang: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    harga_barang: {
        type: Sequelize.REAL,
        allowNull: true
    },
    keadaan_barang: {
        type: Sequelize.STRING,
        allowNull: true
    },
    keterangan_barang: {
        type: Sequelize.STRING,
        allowNull: true
    },
    asal_usul: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

export default Ruangan