/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('energy_measurement', {
    device_no: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    week_power: {
      type: "DOUBLE(10,3)",
      allowNull: true
    },
    lastweek_power: {
      type: "DOUBLE(10,3)",
      allowNull: true
    },
    power_range: {
      type: "DOUBLE(10,3)",
      allowNull: true
    },
    power_rate: {
      type: "DOUBLE(10,4)",
      allowNull: true
    },
    newest_value: {
      type: "DOUBLE(10,3)",
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'energy_measurement'
  });
};
