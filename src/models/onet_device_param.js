/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onet_device_param', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    od_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    temp_upper: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    temp_lower: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    humidness_upper: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    humidness_lower: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    voltage_error: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'onet_device_param'
  });
};
