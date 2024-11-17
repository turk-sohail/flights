const { AirportRepsository } = require("../repository");

class AirportService {
  constructor() {
    this.airportRepository = new AirportRepsository();
  }

  async createAirport(airport) {
    try {
      const newAirport = await this.airportRepository.createAirport(airport);
      return newAirport;
    } catch (error) {
      console.log("something went wrong in airport service");
      throw error;
    }
  }

  async getAllAirports() {
    try {
      const airports = await this.airportRepository.getAllAirports();
      return airports;
    } catch (error) {
      console.log("something went wrong in airport service");
      throw error;
    }
  }

  async getAirportById(airportId) {
    try {
      const airport = await this.airportRepository.getAirportById(airportId);
      return airport;
    } catch (error) {
      console.log("something went wrong in airport service");
      throw error;
    }
  }

  async updateAirport({ airportId, name }) {
    try {
      const airport = await this.airportRepository.updateAirport({
        airportId,
        name,
      });
      return airport;
    } catch (error) {
      console.log("something went wrong in airport service");
      throw error;
    }
  }

  async deleteAirport(airportId) {
    try {
      const airport = await this.airportRepository.deleteAirport(airportId);
      return airport;
    } catch (error) {
      console.log("something went wrong in airport service");
      throw error;
    }
  }

  async createManyAirports(airports) {
    try {
      const airport = await this.airportRepository.createManyAirports(airports);
      return airport;
    } catch (error) {
      console.log("something went wrong in airport service");
      throw error;
    }
  }

  async getAllAirportsByCityId(cityId) {
    try {
      const airports = await this.airportRepository.getAllAirportsByCityId(
        cityId
      );
      return airports;
    } catch (error) {
      console.log("something went wrong in airport service");
      throw error;
    }
  }
}

module.exports = new AirportService();
