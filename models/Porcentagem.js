const { Model, DataTypes } = require('sequelize');

 class Porcentagem extends Model {
  
  static init (connection){
    super.init({
      porcentagem_do_db: DataTypes.FLOAT ,
      valor_do_lancamento: DataTypes.FLOAT ,
      porcentagem_calculada: DataTypes.FLOAT , 
      data_porcentagem: DataTypes.DATEONLY
    }, {sequelize: connection , timestamps: false});
  }
};

module.exports = Porcentagem;

