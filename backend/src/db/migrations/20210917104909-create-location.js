module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      title: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
      },
      address: {
        type: Sequelize.TEXT,
      },
      type: {
        type: Sequelize.TEXT,
      },
      coordX: {
        type: Sequelize.FLOAT,
      },
      coordY: {
        type: Sequelize.FLOAT,
      },
      openingHours: {
        type: Sequelize.TEXT,
      },
      site: {
        type: Sequelize.TEXT,
      },
      vk: {
        type: Sequelize.TEXT,
      },
      fb: {
        type: Sequelize.TEXT,
      },
      instagram: {
        type: Sequelize.TEXT,
      },
      whatsapp: {
        type: Sequelize.TEXT,
      },
      telegram: {
        type: Sequelize.TEXT,
      },
      viber: {
        type: Sequelize.TEXT,
      },
      email: {
        type: Sequelize.TEXT,
      },
      tel1: {
        type: Sequelize.TEXT,
      },
      tel2: {
        type: Sequelize.TEXT,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Locations');
  },
};
