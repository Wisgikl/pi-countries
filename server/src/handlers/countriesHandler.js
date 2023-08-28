const {getAllCountries,getCountryById,getCountryByName} = require("../controllers/countriesControllers")


const getCountriesHandler = async(req,res)=>{
    try {
        const allCountries = await getAllCountries()

        return res.status(200).json(allCountries)
    } catch (error) {
        return res.status(400).json({error:"No se pudieron obtener los paises"})
    }
}

const getByIdHandler = async(req,res)=>{
    try {
        const {id}= req.params

        const country = await getCountryById(id)

        res.status(200).json(country)
    } catch (error) {
        return res.status(500).json({error:"No se pudo obtener el id del pais"})
    }
}

const getByNameHandler = async(req,res)=>{
    try {
        const {name} = req.query

        const countries = await getCountryById(name)

        res.status(200).json(countries)
    } catch (error) {
        return res.status(500).json({error:"No se pudo encontrar el pais"})
    }
}

module.exports = {
    getCountriesHandler,
    getByIdHandler,
    getByNameHandler
}