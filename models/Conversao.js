const { Model, DataTypes } = require('sequelize');

 class Conversao extends Model {
  
  static init (connection){
    super.init({
      valor_original: DataTypes.INTEGER ,
      valor_convertido: DataTypes.INTEGER 
    }, {sequelize: connection ,timestamps: false});
  }
};

module.exports = Conversao;
