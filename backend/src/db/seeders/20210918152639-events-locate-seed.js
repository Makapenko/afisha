/* eslint-disable no-unused-vars */
const { arrAdmins, arrEvents, arrLocations } = require('../seedArrays');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Admins', arrAdmins, {});
    await queryInterface.bulkInsert('Locations', arrLocations, {});
    await queryInterface.bulkInsert('Events', arrEvents, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Events', null, {});
    await queryInterface.bulkDelete('Locations', null, {});
    await queryInterface.bulkDelete('Admins', null, {});
  },
};
