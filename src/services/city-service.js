const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  /**
   * Creates a new city.
   * @param {Object} city - The city to be created.
   * @param {string} city.name - The name of the city.
   * @returns {Promise<City>} The created city.
   */
  async createCity({ name }) {
    try {
      const city = await this.cityRepository.createCity({ name });
      return city;
    } catch (error) {
      console.log("something went wrong in city service");
      throw error;
    }
  }
  async getAllCities(filters) {
    try {
      const cities = await this.cityRepository.getAllCities(filters);
      return cities;
    } catch (error) {
      console.log("something went wrong in city service");
      throw error;
    }
  }

  async getCityById(cityId) {
    try {
      const city = await this.cityRepository.getCityById(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong in city service");
      throw error;
    }
  }

  async updateCity({ cityId, name }) {
    console.log(cityId, name);
    try {
      const city = await this.cityRepository.updateCity({ cityId, name });
      return city;
    } catch (error) {
      console.log("something went wrong in city service");
      throw error;
    }
  }

  async deleteCity(cityId) {
    try {
      const city = await this.cityRepository.deleteCity(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong in city service");
      throw error;
    }
  }
}

module.exports = new CityService();
