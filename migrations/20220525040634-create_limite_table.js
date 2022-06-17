'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('limites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      limite: {
        type: Sequelize.STRING
      },
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('limites');
  }
};
