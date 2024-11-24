const { StatusCodes } = require("http-status-codes");

const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
  ) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      data: {},
      success: false,
      message: "BAD request body for create flight",
      error: "Missing properties to create flight",
    });
  }
  next();
};

module.exports = {
  validateCreateFlight,
};
