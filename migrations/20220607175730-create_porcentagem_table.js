'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('porcentagems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      porcentagem_do_db: {
        type: Sequelize.FLOAT
      },
      valor_do_lancamento: {
        type: Sequelize.FLOAT
      },
      porcentagem_calculada: {
        type: Sequelize.FLOAT
      },
    
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('porcentagems');
  }
};
