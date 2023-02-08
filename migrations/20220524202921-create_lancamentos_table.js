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
      moeda: {
        type: Sequelize.STRING 
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
        type: Sequelize.DATEONLY
      },

     // colocar date DATEONLY
      id_categoria: {
        type: Sequelize.INTEGER ,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'categoria',
            schema: 'public'
          },
          key: 'id'
        }
      
      },
      
      descricao: {
        type: Sequelize.TEXT
      } ,
    
      
    });
  
},
  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('lancamentos');
  }
};