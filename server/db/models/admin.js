'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    static associate(models) {}
  }
  Admin.init(
    {
      firstname: { type: DataTypes.TEXT, allowNull: false },
      parentname: { type: DataTypes.TEXT, allowNull: false },
      lastname: { type: DataTypes.TEXT, allowNull: false },
      email: { type: DataTypes.TEXT, allowNull: false, unique: true },
      password: { type: DataTypes.TEXT, allowNull: false },
      phone: { type: DataTypes.TEXT, allowNull: false, unique: true },
      employeeNumber: { type: DataTypes.TEXT, allowNull: false, unique: true },
    },
    {
      sequelize,
      modelName: 'Admin',
    }
  )
  return Admin
}
