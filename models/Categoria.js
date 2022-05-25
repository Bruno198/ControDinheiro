const { Model, DataTypes } = require('sequelize');

 class Categoria extends Model {
  
  static init (connection){
    super.init({
      categoria: DataTypes.STRING
    }, {sequelize: connection , timestamps: false});
  }
};

module.exports = Categoria;

