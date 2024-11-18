const { Airplane } = require("../models/index");

class AirplaneRepository {
  async getAll() {
    return await Airplane.findAll();
  }

  async getById(id) {
    try {
      const airplane = await Airplane.findByPk(id);
      return airplane;
    } catch (error) {
      console.log("something went worong in airplane repository");
      throw error;
    }
  }
}

module.exports = AirplaneRepository;
