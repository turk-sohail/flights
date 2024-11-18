const { where, Op } = require("sequelize");
const { Flights } = require("../models");

class FlightRepository {
  createFilter(data) {
    const filter = {};
    if (data.departureCityId) {
      filter.departureCityId = data.departureAirportId;
    }
    if (data.arrivalCityId) {
      filter.arrivalCityId = data.arrivalAirportId;
    }
    if (data.minPrice && data.minPrice) {
      //Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
      Object.assign(filter, {
        [Op.and]: [
          { price: { [Op.gte]: data.maxPrice } },
          { price: { [Op.lte]: data.minPrice } },
        ],
      });
    }
    // if (data.maxPrice) {
    //   Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
    // }
    return filter;
  }
  async getAllFlights(data) {
    try {
      const filterObject = this.createFilter(data);
      const flights = await Flights.findAll({
        where: filterObject,
      });
      return flights;
    } catch (error) {
      console.log("something went wrong in flight repository");
      throw error;
    }
  }

  async createFlight(flight) {
    try {
      const newFlight = await Flights.create(flight);
      return newFlight;
    } catch (error) {
      console.log("something went wrong in flight repository");
      throw error;
    }
  }

  async getFlightById(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("something went wrong in flight repository");
      throw error;
    }
  }
  async deleteFlight(flightId) {
    try {
      const flight = await Flights.destroy({
        where: {
          id: flightId,
        },
      });
      return flight;
    } catch (error) {
      console.log("something went wrong in flight repository");
      throw error;
    }
  }

  async updateFlight({ flightId, name }) {
    console.log(flightId, name);
    try {
      const flight = await Flights.update(name, {
        returning: true,
        where: { id: flightId },
      });
      return flight;
    } catch (error) {
      console.log("something went wrong in flight repository");
      throw error;
    }
  }
}

module.exports = FlightRepository;
