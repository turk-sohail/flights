const { Op } = require("sequelize");
const { FlightRepository, AirplaneRepository } = require("../repository");
const compareTime = require("../utils/compare-time");
class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }

  async getAllFlights(filter) {
    try {
      const flights = await this.flightRepository.getAllFlights(filter);
      return flights;
    } catch (error) {
      console.log("something went wrong in flight service");
      throw error;
    }
  }

  async createFlight(data) {
    //console.log(compareTime(data.arrivalTime, data.departureTime));
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw new Error("Arrival time cannot be less than departure time");
      }
      const airplane = await this.airplaneRepository.getById(data.airplaneId);
      const newFlight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return newFlight;
    } catch (error) {
      console.log("something went wrong in flight service");
      throw error;
    }
  }
  async getFlight(airplaneId) {
    try {
      const flight = await this.flightRepository.getByAirplaneId(airplaneId);
      return flight;
    } catch (error) {
      console.log("something went wrong in flight service");
      throw error;
    }
  }

  // async getAllFlights(filters) {
  //   try {
  //     const flights = await this.flightRepository.getAllFlights({
  //       where: filters,
  //     });
  //     return flights;
  //   } catch (error) {
  //     console.log("something went wrong in flight service");
  //     throw error;
  //   }
  // }
}

module.exports = FlightService;
