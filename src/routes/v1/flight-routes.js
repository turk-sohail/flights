const { flightsController } = require("../../controllers");

const router = require("express").Router();

router.post("/", flightsController.createFlight);
router.get("/", flightsController.getAllFlights);

module.exports = router;
