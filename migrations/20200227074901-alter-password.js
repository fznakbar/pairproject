'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users','password',Sequelize.STRING);
    
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users','password');
    
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
  }
};