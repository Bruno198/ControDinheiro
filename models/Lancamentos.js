const { Model, DataTypes } = require('sequelize');

class Lancamentos extends Model {

  static init(connection) {
    super.init({
      moeda: DataTypes.STRING,
      ganho: DataTypes.STRING,
      gasto: DataTypes.STRING,
      valor: DataTypes.FLOAT,
      data_lancamento: DataTypes.DATEONLY,
      id_categoria: DataTypes.INTEGER,
      descricao: DataTypes.TEXT



    }, { sequelize: connection, timestamps: false });
  }
  static associate(models) {
    this.belongsTo(models.Categoria, { foreignKey: "id_categoria", as: "categoria" });
  }

};

module.exports = Lancamentos;