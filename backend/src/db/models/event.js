const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Admin, Location, EventPhoto }) {
      Event.belongsTo(Admin);
      Event.belongsTo(Location);
      Event.hasMany(EventPhoto);
    }
  }
  Event.init({
    title: {
      type: DataTypes.STRING,
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
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
