const { CityService } = require("../services");

const create = async (req, res) => {
  try {
    const city = await CityService.createCity(req.body);
    res.status(200).json({
      data: city,
      success: true,
      message: "successfully created city ",
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

const getAll = async (req, res) => {
  try {
    const cities = await CityService.getAllCities(req.query);
    res.status(200).json({
      data: cities,
      success: true,
      message: "successfully fetched cities",
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

const createMany = async (req, res) => {
  try {
    const cities = await CityService.createManyCities(req.body);
    res.status(200).json({
      data: cities,
      success: true,
      message: "successfully created cities",
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

const getCityById = async (req, res) => {
  try {
    const city = await CityService.getCityById(req.params.id);
    res.status(200).json({
      data: city,
      success: true,
      message: "successfully fetched city",
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

const updateCity = async (req, res) => {
  console.log(req.params);
  try {
    const city = await CityService.updateCity({
      cityId: req.params.id,
      name: req.body,
    });
    res.status(200).json({
      data: city,
      success: true,
      message: "successfully updated city",
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

const deleteCity = async (req, res) => {
  try {
    const city = await CityService.deleteCity(req.params.id);
    res.status(200).json({
      data: city,
      success: true,
      message: "successfully deleted city",
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
  create,
  getAll,
  getCityById,
  updateCity,
  deleteCity,
  createMany,
};
