'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model{}
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  },{sequelize})

  User.associate = function(models) {
    User.belongsToMany(models.Destination, {through :models.UserDestination})
  };
  return User;
};