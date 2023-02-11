const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    ID:{
      type:DataTypes.STRING(3),
      primaryKey:true,
      allowNull:false
    },
    name:{
      type:DataTypes.STRING,
      unique:true,
      allowNull:false,
    },
    flag_img:{
      type:DataTypes.STRING,
      allowNull:false,
    },     
    continent:{
      type:DataTypes.STRING,
      allowNull:false,
    }, 
    capital:{
      type:DataTypes.STRING,
      allowNull:false,
    },   
    subregion:{
      type:DataTypes.STRING,
    }, 
    area:{
      type:DataTypes.STRING,
      allowNull:false,
    },       
    population:{
      type:DataTypes.INTEGER,
    }
  },{
      timestamps:false
    });
};