const { Model, DataTypes } = require('sequelize');

 class Limite extends Model {
  
  static init (connection){
    super.init({
      limite: DataTypes.STRING
    }, {sequelize: connection ,timestamps: false});
  }
};

module.exports = Limite;

