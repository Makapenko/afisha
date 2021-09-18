module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Events', {
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
      AdminId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Admins',
          key: 'id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
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
      price: {
        type: Sequelize.TEXT,
      },
      subcategory: {
        type: Sequelize.TEXT,
      },
      timeStart: {
        type: Sequelize.TEXT,
      },
      timeEnd: {
        type: Sequelize.TEXT,
      },
      dorsOpen: {
        type: Sequelize.TEXT,
      },
      dateStart: {
        type: Sequelize.TEXT,
      },
      dateEnd: {
        type: Sequelize.TEXT,
      },
      postAuthor: {
        type: Sequelize.TEXT,
      },
      linkToRegister: {
        type: Sequelize.TEXT,
      },
      linkToBuy: {
        type: Sequelize.TEXT,
      },
      linkToEvent: {
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
    await queryInterface.dropTable('Events');
  },
};
