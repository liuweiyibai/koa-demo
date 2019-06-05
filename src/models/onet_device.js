/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onet_device', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    device_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    device_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    device_alias: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imei: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imsi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    device_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    onet_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    group_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    company_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    online_state: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    device_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    onet_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    enable_state: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    del: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    tableName: 'onet_device'
  });
};
