const { Model, DataTypes } = require('sequelize');

 class Lancamentos extends Model {
  
  static init (connection){
    super.init({
        ganho: DataTypes.STRING,
        gasto: DataTypes.STRING ,
        valor: DataTypes.INTEGER ,
        data_lancamento: DataTypes.DATE ,
        id_categoria: DataTypes.INTEGER ,
        saldo: DataTypes.STRING
    }, {sequelize: connection, timestamps: false});
  }
  static associate(models){
    this.belongsToone(models.Categoria, {foreignKey: "categoria_id", as: "lancamentos_categorizados"});
  }
};

module.exports = Lancamentos;