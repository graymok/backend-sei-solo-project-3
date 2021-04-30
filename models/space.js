'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class space extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.space.belongsToMany(models.user, {through: 'reservation'})
      models.space.belongsTo(models.workstyle)
    }
  };
  space.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    capacity: DataTypes.STRING,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    workstyleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'space',
  });
  return space;
};