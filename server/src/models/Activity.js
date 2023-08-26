
const {DataTypes} = require('sequelize');


module.exports = (sequelize) =>{
    sequelize.define(
        "activity",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
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
                allowNull: true,
              },
              temporada: {
                type: DataTypes.STRING,
                value: ['Verano', 'Otoño', 'Invierno', 'Primavera'],
                allowNull: false,
              },
              
            },
        {
            timestamps: false,
        }
    );
};
        
    
