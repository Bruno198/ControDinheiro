const { Model, DataTypes } = require('sequelize');

 class Conversao extends Model {
  
  static init (connection){
    super.init({
      valor_original: DataTypes.INTEGER ,
      valor_convertido: DataTypes.INTEGER ,
      data_da_convercao: DataTypes.DATEONLY
    }, {sequelize: connection ,timestamps: false});
  }
};

module.exports = Conversao;
