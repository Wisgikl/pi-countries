const { Router } = require("express");

const activitiesRouter = require("./activities")

const router = Router();

router.use("/activities",activitiesRouter )

module.exports = router;
