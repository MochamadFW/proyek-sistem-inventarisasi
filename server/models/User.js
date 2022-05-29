import Sequelize from 'sequelize'
import db from '../db.js'

const User = db.define('User', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true
  },
  user_role: {
    type: Sequelize.STRING,
    allowNull: true
  },
  total_login: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})

export default User