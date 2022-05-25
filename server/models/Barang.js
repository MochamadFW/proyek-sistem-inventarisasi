import Sequelize from 'sequelize'
import db from '../db.js'

const Barang = db.define('Barang', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  kode_barang: {
    type: Sequelize.STRING
  },
  nama_barang: {
    type: Sequelize.STRING
  },
  nomor_register: {
    type: Sequelize.STRING
  },
  tipe_barang: {
    type: Sequelize.STRING
  },
  ukuran_barang: {
    type: Sequelize.STRING
  },
  bahan_barang: {
    type: Sequelize.STRING
  },
  tahun_pembelian: {
    type: Sequelize.DATE
  },
  nomor_pabrik: {
    type: Sequelize.STRING
  },
  nomor_rangka: {
    type: Sequelize.STRING
  },
  nomor_mesin: {
    type: Sequelize.STRING
  },
  nomor_polisi: {
    type: Sequelize.STRING
  },
  nomor_bpkb: {
    type: Sequelize.STRING
  },
  asal_usul: {
    type: Sequelize.STRING
  },
  harga_barang: {
    type: Sequelize.REAL
  },
  keadaan_barang: {
    type: Sequelize.STRING
  },
  keterangan: {
    type: Sequelize.STRING
  }
})

export default Barang