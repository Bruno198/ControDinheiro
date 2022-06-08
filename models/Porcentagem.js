const { Model, DataTypes } = require('sequelize');

 class Porcentagem extends Model {
  
  static init (connection){
    super.init({
      porcentagem: DataTypes.INTEGER
    }, {sequelize: connection , timestamps: false});
  }
};

module.exports = Porcentagem;

