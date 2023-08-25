
const {DataTypes} = require('sequelize');


module.exports = (sequelize) =>{
    sequelize.define(
        "activity",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
              },
              nombre: {
                type: DataTypes.STRING,
                allowNull: false,
              },
              dificultad: {
                type: DataTypes.INTEGER,
                value: [1, 2, 3, 4, 5],
              },
              duracion: {
                type: DataTypes.INTEGER,
        
              },
              temporada: {
                type: DataTypes.STRING,
                value: ['Verano', 'Otoño', 'Invierno', 'Primavera'],
              },
              
            },
        {
            timestamps: false,
        }
    );
};
        
    
