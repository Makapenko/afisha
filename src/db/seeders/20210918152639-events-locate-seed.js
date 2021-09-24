/* eslint-disable no-unused-vars */
const {
  arrAdmins, arrEvents, arrLocations, arrEventPhoto, arrLocationPhoto,
} = require('../seedArrays');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Admins', arrAdmins, {});
    await queryInterface.bulkInsert('Locations', arrLocations, {});
    await queryInterface.bulkInsert('LocationPhotos', arrLocationPhoto, {});
    await queryInterface.bulkInsert('Events', arrEvents, {});
    await queryInterface.bulkInsert('EventPhotos', arrEventPhoto, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('EventPhotos', null, {});
    await queryInterface.bulkDelete('Events', null, {});
    await queryInterface.bulkDelete('LocationPhotos', null, {});
    await queryInterface.bulkDelete('Locations', null, {});
    await queryInterface.bulkDelete('Admins', null, {});
  },
};
