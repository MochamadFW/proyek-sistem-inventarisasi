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
        type: Sequelize.STRING
    },
    nama_ruangan: {
        type: Sequelize.STRING
    },
    luas_lantai: {
        type: Sequelize.STRING
    }
})

export default Ruangan