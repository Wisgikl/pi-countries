const {Activity} = require('../db')

const getActivities = async(req,res)=>{
    try{
        const activities = await Activity.findAll()
        if(activities.length) return res.status(200).json(activities)
        
        else throw Error;
    }catch (error){
        res.status(500).json({error:"No activities in DB"})
    }
    
}
 
const createActivities = async (nombre,dificultad,duracion,temporada) => {
    const activity = await Activity.create({nombre,dificultad,duracion,temporada}) 
    
    return activity
}

module.exports = {
    getActivities,
    createActivities
}