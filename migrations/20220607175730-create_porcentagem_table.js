'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('porcentagem', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      porcentagem: {
        type: Sequelize.INTEGER
      },
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('porcentagem');
  }
};
