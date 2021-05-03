'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class workstyle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.workstyle.hasMany(models.user)
      models.workstyle.hasMany(models.space)
    }
  };
  workstyle.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'workstyle',
  });
  return workstyle;
};