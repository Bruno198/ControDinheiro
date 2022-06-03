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
        type: Sequelize.INTEGER
      },
      data_lancamento: {
        type: Sequelize.DATE
      },
      id_categoria: {
        type: Sequelize.INTEGER ,
        references: {model : "categoria" , key : "id"}
      },
      saldo: {
        type: Sequelize.STRING
      }
    });
  

  await queryInterface.createTable('lancamentos_categorizados', {
    categoria_id: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'categoria',
          schema: 'public'
        },
        key: 'id'
      }
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
},
  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('lancamentos');
    queryInterface.dropTable('lancamentos_categorizados');
  }
};