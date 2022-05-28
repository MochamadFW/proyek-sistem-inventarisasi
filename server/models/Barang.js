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
    type: Sequelize.STRING,
    allowNull: true
  },
  nama_barang: {
    type: Sequelize.STRING,
    allowNull: true
  },
  nomor_register: {
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
  tahun_pembelian: {
    type: Sequelize.DATE,
    allowNull: true
  },
  nomor_pabrik: {
    type: Sequelize.STRING,
    allowNull: true
  },
  nomor_rangka: {
    type: Sequelize.STRING,
    allowNull: true
  },
  nomor_mesin: {
    type: Sequelize.STRING,
    allowNull: true
  },
  nomor_polisi: {
    type: Sequelize.STRING,
    allowNull: true
  },
  nomor_bpkb: {
    type: Sequelize.STRING,
    allowNull: true
  },
  asal_usul: {
    type: Sequelize.STRING,
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
  keterangan: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

export default Barang