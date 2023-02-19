const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    ID:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        allowNull:false
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificulty:{
        type: DataTypes.ENUM('1', '2', '3', '4', '5'),
        allowNull: false,
    },
    duration:{
        type: DataTypes.INTEGER,        
        allowNull: false,
    },
    season:{
        type: DataTypes.ENUM('Summer', 'Spring', 'Autumn', 'Winter', 'All'),
        defaultValue:'All'  
    },
  },{
    timestamps:false
  });
};