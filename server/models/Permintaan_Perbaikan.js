import Sequelize from 'sequelize'
import db from '../db.js'

const Permintaan_Perbaikan = db.define('Permintaan_Perbaikan', {
 id: {
     type: Sequelize.INTEGER,
     allowNull: false,
     primaryKey: true,
     autoIncrement: true
 },
 nama_pengaju: {
     type: Sequelize.STRING,
     allowNull: true
 },
 tanggal_permintaan: {
     type: Sequelize.DATE,
     allowNull: true
 },
 jumlah_barang: {
     type: Sequelize.INTEGER,
     allowNull: true
 },
 keterangan_barang: {
     type: Sequelize.STRING,
     allowNull: true
 },
 nama_barang: {
     type: Sequelize.STRING,
     allowNull: true
 },
 keberadaan_aset: {
     type: Sequelize.STRING,
     allowNull: true
 },
 jenis_kerusakan: {
     type: Sequelize.STRING,
     allowNull: true
 }
})

export default Permintaan_Perbaikan