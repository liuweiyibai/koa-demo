/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('thermal_imager_temp', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    thermal_imager_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    index: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    param: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    value: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'thermal_imager_temp'
  });
};
