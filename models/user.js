'use strict';
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model
    class User extends Model {
        getfullname(){
            return this.first_name + ' ' + this.last_name
        }
    }
    User.init({
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        role: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        is_logIn: DataTypes.BOOLEAN 
    }, { sequelize })

    User.associate = function(models) {
        User.belongsToMany(models.Destination, { through: models.UserDestination })
        User.hasMany(models.UserDestination)
    };
    return User;
};