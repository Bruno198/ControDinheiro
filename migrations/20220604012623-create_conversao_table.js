'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('conversao', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      valor_original: {
        type: Sequelize.INTEGER
      },
      valor_convertido: {
        type: Sequelize.INTEGER
      },
      data_da_conversao: {
        type: Sequelize.INTEGER
      },
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('conversao');
  }
};
