const {Router} = require("express")

const {getByIdHandler,getByNameHandler,getCountriesHandler} = require("../handlers/countriesHandler")

const countriesRouter = Router()


countriesRouter.get("/countries",getCountriesHandler)
countriesRouter.get("/countries/:id",getByIdHandler)
countriesRouter.get("/country",getByNameHandler)


module.exports = countriesRouter