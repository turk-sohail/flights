const routes = require("express").Router();

const { airportController } = require("../../controllers");

routes.get("/", airportController.getAllAirports);
routes.get("/city/:id", airportController.getAllAirportsByCityId);
routes.get("/:id", airportController.getAirportById);
routes.post("/", airportController.createAirport);
routes.patch("/:id", airportController.updateAirport);
routes.delete("/:id", airportController.deleteAirport);
routes.post("/bulk", airportController.createManyAirports);

module.exports = routes;
