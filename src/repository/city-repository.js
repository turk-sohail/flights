const { Op } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("something went wrong in city repository");
      throw error;
    }
  }

  async createManyCities(cities) {
    try {
      const city = await City.bulkCreate(cities);
      return city;
    } catch (error) {
      console.log("something went wrong in city repository");
      throw error;
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: { id: cityId },
      });
      return true;
    } catch (error) {
      throw error;
    }
  }

  async getAllCities(fitler) {
    try {
      if (fitler.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: fitler.name,
            },
          },
        });
        return cities;
      }
    } catch (error) {
      console.log("something went wrong in city repository");
      throw error;
    }
  }

  async getCityById(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong in city repository");
      throw error;
    }
  }
  async updateCity({ cityId, name }) {
    console.log(cityId, name);
    try {
      const city = await City.update(name, {
        returning: true,
        where: { id: cityId },
      });
      return city;
    } catch (error) {
      console.log("something went wrong in city repository");
      throw error;
    }
  }
}

module.exports = CityRepository;
