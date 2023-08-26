const {getActivities, createActivities} = require("../controllers/activitiesControllers")


const getActivitiesDB = async(req,res)=>{
    try {
        const activities = await getActivities()
        return res.status(200).json(activities)
    } catch (error) {
        return res.status(400).json({error:"No se encontraron actividades"})
    }
}

const postActivities = async(req,res)=>{
    const {nombre,dificultad,duracion,temporada} = req.body
    try {
        const newActivity = await createActivities(nombre,dificultad,duracion,temporada)
        return res.status(200).json(newActivity)
    } catch (error) {
        return res.status(400).json({error:"No se pudieron crear actividades"})
    }
}

module.exports = {
    getActivitiesDB,
    postActivities
}