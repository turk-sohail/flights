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

const getFlightById = async (req, res) => {
  try {
    const flight = await flightService.getFlight(req.params.id);
    return res.status(StatusCodes.OK).json({
      data: flight,
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

const updateFlight = async (req, res) => {
  try {
    const flight = await flightService.updateFlight(req.params.id, req.body);
    return res.status(StatusCodes.OK).json({
      data: flight,
      success: true,
      message: "Successfully updated flight",
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

const deleteFlight = async (req, res) => {
  try {
    const flight = await flightService.deleteFlight(req.params.id);
    return res.status(StatusCodes.OK).json({
      data: flight,
      success: true,
      message: "Successfully deleted flight",
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
  getFlightById,
  updateFlight,
  deleteFlight,
};
