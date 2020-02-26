'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class UserDestination extends Model{}
  UserDestination.init({
    UserId: DataTypes.INTEGER,
    DestinationId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    confirmed: DataTypes.BOOLEAN
  },{sequelize})

  UserDestination.associate = function(models) {
    UserDestination.belongsTo(models.User, {foreignKey: 'UserId'})
    UserDestination.belongsTo(models.Destination, {foreignKey: 'DestinationId'})
  };
  return UserDestination;
};