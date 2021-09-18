module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('LocationPhotos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      LocationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Locations',
          key: 'id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
      url: {
        type: Sequelize.TEXT,
      },
    });
  },
  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('LocationPhotos');
  },
};
