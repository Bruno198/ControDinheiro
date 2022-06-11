const { Model, DataTypes } = require('sequelize');

 class Categoria extends Model {
  
  static init (connection){
    super.init({
      categoria: DataTypes.STRING
    }, {sequelize: connection , timestamps: false});
  }
  static associate(models){
    this.hasMany(models.Lancamentos, {foreignKey: "id_categoria", as: "lancamentos"});
  }
};

module.exports = Categoria;

