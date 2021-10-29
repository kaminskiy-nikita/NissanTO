'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate({ Owner, Model, Milege }) {
      Car.belongsTo(Owner), Car.belongsTo(Model), Car.belongsTo(Milege)
    }
  }
  Car.init(
    {
      OwnerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Owner',
          key: 'id',
        },
      },
      ModelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Model',
          key: 'id',
        },
      },
      stateNumber: { type: DataTypes.INTEGER, allowNull: false },
      yearIssue: { type: DataTypes.INTEGER, allowNull: false },
      MileageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Milege',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Car',
    }
  )
  return Car
}