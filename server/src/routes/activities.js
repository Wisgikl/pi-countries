const {Router} = require("express")

const {getActivitiesDB, postActivities} = require("../handlers/activitiesHandlers")

const activitiesRouter = Router()

activitiesRouter.get("/", getActivitiesDB)
activitiesRouter.get("/",postActivities)

module.exports = activitiesRouter 