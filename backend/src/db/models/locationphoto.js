const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class LocationPhoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Location }) {
      LocationPhoto.belongsTo(Location);
    }
  }
  LocationPhoto.init({
    LocationId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Location',
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
    modelName: 'LocationPhoto',
  });
  return LocationPhoto;
};
