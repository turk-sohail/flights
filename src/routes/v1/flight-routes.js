const { flightsController } = require("../../controllers");
const { flightMiddleWares } = require("../../middlewares");

const router = require("express").Router();

router.post(
  "/",
  flightMiddleWares.validateCreateFlight,
  flightsController.createFlight
);
router.get("/", flightsController.getAllFlights);
router.get("/:id", flightsController.getFlightById);
router.patch("/:id", flightsController.updateFlight);
router.delete("/:id", flightsController.deleteFlight);

module.exports = router;
