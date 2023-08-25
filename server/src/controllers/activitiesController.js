const {Activity} = require('../db')

const getActivities = async()=>{
    const activities = await Activity.findAll()
    if(!activities.length){
        throw new Error('No se han creado actividades')
    }
    return activities
}

const createActivities = async(nombre,dificultad,duracion,temporada )=>{
    const activity = await Activity.create({nombre,dificultad,duracion,temporada})
    return activity
}

module.exports = {
    getActivities,
    createActivities
}