const { DataTypes } = require('sequelize');  

//aqui declaramos el modelo que va a manejar las actividades turisticas
module.exports = sequelize => {
    sequelize.define('activity', {
      ID:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      dificulty:{
        type: DataTypes.ENUM(1, 2, 3, 4, 5),
        allowNull: false,
      },
      duration:{
        type: DataTypes.INTEGER,        
        allowNull: false,
      },
      season:{
        type: DataTypes.ENUM('Summer', 'Spring', 'Autumn', 'Winter', 'All'),
        defaultValue:'All'  
      }
    },{
      timestamps:false
    })
  }