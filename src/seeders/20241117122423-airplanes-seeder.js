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
     *
     */
    await queryInterface.bulkInsert("Airplanes", [
      {
        modelNumber: "Boeing 737",
        capacity: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: " Airbus a320",
        capacity: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Airbus a380",
        capacity: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Boeing 787",
        capacity: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Boeing 777",
        capacity: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Airbus 1800",
        capacity: 1200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Casena c919",
        capacity: 1400,
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
