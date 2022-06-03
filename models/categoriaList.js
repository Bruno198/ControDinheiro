const { Model, DataTypes } = require('sequelize');

 class id_categoria extends Model {
  
  static init (connection){
    super.init({
        id_categoria: DataTypes.INTEGER
    }, {sequelize: connection , timestamps: false});
  }
};

module.exports = id_categoria;

