/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('device_threshold', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    device_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    threshold_number: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    threshold_value: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'device_threshold'
  });
};
