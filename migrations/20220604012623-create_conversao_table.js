'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('conversaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      valor_original: {
        type: Sequelize.FLOAT
      },
      valor_convertido: {
        type: Sequelize.FLOAT
      }
     
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('conversaos');
  }
};
