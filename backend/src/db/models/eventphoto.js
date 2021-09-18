const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EventPhoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Event }) {
      EventPhoto.belongsTo(Event);
    }
  }
  EventPhoto.init({
    EventId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Events',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    },
    url: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'EventPhoto',
  });
  return EventPhoto;
};
