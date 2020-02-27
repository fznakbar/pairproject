'use strict';
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model
    class Destination extends Model {}
    Destination.init({
        name: DataTypes.STRING,
        price: DataTypes.INTEGER
    }, { sequelize })

    Destination.associate = function(models) {
        Destination.belongsToMany(models.User, { through: models.UserDestination })
        Destination.hasMany(models.UserDestination)
    };
    return Destination;
};