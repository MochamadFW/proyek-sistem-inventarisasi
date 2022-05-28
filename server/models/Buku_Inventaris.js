import Sequelize from 'sequelize'
import db from '../db.js'

const BI = db.define('BI', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nama_barang: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

export default BI