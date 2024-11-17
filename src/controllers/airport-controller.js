const { StatusCodes } = require("http-status-codes");
const { AirportService } = require("../services");

const createAirport = async (req, res) => {
  try {
    const airport = await AirportService.createAirport(req.body);
    res.status(StatusCodes.OK).json({
      data: airport,
      success: true,
      message: "successfully created airport",
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const getAllAirports = async (req, res) => {
  try {
    const airports = await AirportService.getAllAirports();
    res.status(StatusCodes.OK).json({
      data: airports,
      success: true,
      message: "successfully fetched airports",
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const getAllAirportsByCityId = async (req, res) => {
  try {
    const airports = await AirportService.getAllAirportsByCityId(req.params.id);
    res.status(StatusCodes.OK).json({
      data: airports,
      success: true,
      message: "successfully fetched airports",
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const getAirportById = async (req, res) => {
  try {
    const airport = await AirportService.getAirportById(req.params.id);
    res.status(StatusCodes.OK).json({
      data: airport,
      success: true,
      message: "successfully fetched airport",
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const updateAirport = async (req, res) => {
  try {
    const airport = await AirportService.updateAirport({
      airportId: req.params.id,
      name: req.body,
    });
    res.status(StatusCodes.OK).json({
      data: airport,
      success: true,
      message: "successfully updated airport",
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const deleteAirport = async (req, res) => {
  try {
    const airport = await AirportService.deleteAirport(req.params.id);
    res.status(StatusCodes.OK).json({
      data: airport,
      success: true,
      message: "successfully deleted airport",
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const createManyAirports = async (req, res) => {
  try {
    const airports = await AirportService.createManyAirports(req.body);
    res.status(StatusCodes.OK).json({
      data: airports,
      success: true,
      message: "successfully created airports",
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: error.message,
      error: error,
    });
  }
};

module.exports = {
  createAirport,
  getAllAirports,
  getAllAirportsByCityId,
  getAirportById,
  updateAirport,
  deleteAirport,
  createManyAirports,
};
