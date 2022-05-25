const { Model, DataTypes } = require('sequelize');

 class Lancamentos extends Model {
  
  static init (connection){
    super.init({
        ganho: DataTypes.STRING,
        gasto: DataTypes.STRING ,
        valor: DataTypes.INTEGER ,
        data_lancamento: DataTypes.DATE ,
        select_novo: DataTypes.DATE
    }, {sequelize: connection, timestamps: false});
  }
};

module.exports = Lancamentos;