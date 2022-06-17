'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('lancamentos', {
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
        type: Sequelize.FLOAT
      },
      data_lancamento: {
        type: Sequelize.DATE
      },
      id_categoria: {
        type: Sequelize.STRING ,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'categoria',
            schema: 'public'
          },
          key: 'id'
        }
      
      },

      select_novo: {
        type: Sequelize.STRING
      } ,
      descricao: {
        type: Sequelize.TEXT
      }

      
    });
  
},
  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('lancamentos');
  }
};