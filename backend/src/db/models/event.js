const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate({ Admin, Location, EventPhoto }) {
      Event.belongsTo(Admin);
      Event.belongsTo(Location);
      Event.hasMany(EventPhoto);
    }
  }
  Event.init({
    title: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    AdminId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Admins',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    },
    LocationId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Locations',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    },
    price: {
      type: DataTypes.TEXT,
    },
    subcategory: {
      type: DataTypes.TEXT,
    },
    // category: {
    //   type: Data.TEXT
    // },
    timeStart: {
      type: DataTypes.TEXT,
    },
    timeEnd: {
      type: DataTypes.TEXT,
    },
    dorsOpen: {
      type: DataTypes.TEXT,
    },
    dateStart: {
      type: DataTypes.TEXT,
    },
    dateEnd: {
      type: DataTypes.TEXT,
    },
    postAuthor: {
      type: DataTypes.TEXT,
    },
    linkToRegister: {
      type: DataTypes.TEXT,
    },
    linkToBuy: {
      type: DataTypes.TEXT,
    },
    linkToEvent: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
