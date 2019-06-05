/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onet_device_data', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    od_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    temp_value: {
      type: "DOUBLE",
      allowNull: true
    },
    humi_value: {
      type: "DOUBLE",
      allowNull: true
    },
    valtage_value: {
      type: "DOUBLE",
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
    tableName: 'onet_device_data'
  });
};
