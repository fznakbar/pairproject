'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserDestinations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      DestinationId: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      confirmed: {
        type: Sequelize.BOOLEAN
      },
      // is_logIn:{
      //   type: Sequelize.BOOLEAN
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserDestinations');
  }
};