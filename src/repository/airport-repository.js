const { Airport } = require("../models");

class AirportRepsository {
  async createAirport(airport) {
    try {
      const newAirport = await Airport.create(airport);
      return newAirport;
    } catch (error) {
      console.log("something went wrong in airport repository");
      throw error;
    }
  }

  async getAllAirports() {
    try {
      const airports = await Airport.findAll();
      return airports;
    } catch (error) {
      console.log("something went wrong in airport repository");
      throw error;
    }
  }

  async getAirportById(airportId) {
    try {
      const airport = await Airport.findByPk(airportId);
      return airport;
    } catch (error) {
      console.log("something went wrong in airport repository");
      throw error;
    }
  }

  async deleteAirport(airportId) {
    try {
      await Airport.destroy({
        where: { id: airportId },
      });
      return true;
    } catch (error) {
      throw error;
    }
  }

  async updateAirport({ airportId, name }) {
    try {
      const airport = await Airport.update(name, {
        returning: true,
        where: { id: airportId },
      });
      return airport;
    } catch (error) {
      console.log("something went wrong in airport repository");
      throw error;
    }
  }

  async createManyAirports(airports) {
    try {
      const airport = await Airport.bulkCreate(airports);
      return airport;
    } catch (error) {
      console.log("something went wrong in airport repository");
      throw error;
    }
  }

  async getAllAirportsByCityId(cityId) {
    try {
      const airports = await Airport.findAll({
        where: {
          cityId: cityId,
        },
      });
      return airports;
    } catch (error) {
      console.log("something went wrong in airport repository");
      throw error;
    }
  }
}

module.exports = AirportRepsository;
