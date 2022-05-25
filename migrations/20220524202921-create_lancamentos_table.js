'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Lancamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ganho: {
        type: Sequelize.STRING 
      },
      gasto: {
        type: Sequelize.STRING
      },
      valor: {
        type: Sequelize.INTEGER
      },
      data_lancamento: {
        type: Sequelize.DATE
      },
      select_novo: {
        type: Sequelize.STRING
      },
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('Lancamentos');
  }
};