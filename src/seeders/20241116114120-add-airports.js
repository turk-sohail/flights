"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Airports", [
      {
        name: "Islamabad International Airport",
        address: "Near G 13 shato road islamabad",
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chaklala Airbase Rawalpindi",
        address: "Near Check 210 Rawalpindi",
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Faisalabad International airport fsb",
        address: "ghowri town faisalabad",
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Benazir Butto Airport faisalabad",
        address: "Reahat nagar faisalabad",
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
