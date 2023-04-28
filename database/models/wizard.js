'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wizard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Wizard.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    house: DataTypes.STRING,
    speciality: DataTypes.STRING,
    patronus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Wizard',
  });
  return Wizard;
};