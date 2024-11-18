const { StatusCodes } = require("http-status-codes");
const { FlightService } = require("../services");

const flightService = new FlightService();

const createFlight = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(StatusCodes.CREATED).json({
      data: flight,
      success: true,
      message: "successfully created flight ",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const getAllFlights = async (req, res) => {
  try {
    const flights = await flightService.getAllFlights(req.query);
    return res.status(StatusCodes.OK).json({
      data: flights,
      success: true,
      message: "Successfully fetched flights",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: error.message,
      error: error,
    });
  }
};

module.exports = {
  createFlight,
  getAllFlights,
};
