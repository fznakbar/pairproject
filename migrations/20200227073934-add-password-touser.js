'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'password', Sequelize.STRING );

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropColumn('Users', 'password');
    
  }
};
