const {Country} = require('../db')
const axios = require("axios")
const db = require("../db") 
const Activity = require('../models/Activity')

const URL = `http://localhost:5000/countries`

const getAllCountries = async()=>{
    const response = await axios(URL)


    const allCountries = response.data

    let dbCountries = []

    for(const country of allCountries){
        if(!country.subregion){
            country.subregion = "Sin subregion"
        }
        if(!country.area){
            country.area = "sin area"
        }
        if(!country.capital){
            
        }
    }

    await Country.findOrCreate({
        where:{
            id: country.cca3,
            nombre: country.name.common,
            bandera: country.flags.png,
            continente: country.region,
            capital: country.capital [0],
            subregion: country.subregion,
            area: country.area,
            poblacion: country.population
        }
    })
    dbCountries.push({
            id: country.cca3,
            nombre: country.name.common,
            bandera: country.flags.png,
            continente: country.region,
            capital: country.capital [0],
            subregion: country.subregion,
            area: country.area,
            poblacion: country.population
    })
    return dbCountries
}

const getCountryById = async(id)=>{
    const country = await Country.findByPK(id,{
        include:{
            model:Activity,
            through:{
                attributes:[],
            }
        }
    })
    return country
}

const getCountryByName = async(name)=>{
    let countries = await getAllCountries()

    countries = countries.filter(country =>{
        return (country.nombre).toLowerCase().includes((name)).toLowerCase();
    })
    return countries
}

module.exports = {
    getAllCountries,
    getCountryById,
    getCountryByName
}