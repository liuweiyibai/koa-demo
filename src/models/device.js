/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('device', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    device_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    company_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    group_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    device_addr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    alias: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    auto_tx: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    enable: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    online: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    state: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_ping: {
      type: DataTypes.DATE,
      allowNull: true
    },
    del: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    port: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    dindex: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    },
    lat: {
      type: "DOUBLE",
      allowNull: true
    },
    lng: {
      type: "DOUBLE",
      allowNull: true
    },
    platform: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    },
    can_break: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    start: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    discon_state: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    collect_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    hub_host: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hub_port: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hardware_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    device_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gateway_code: {
      type: DataTypes.INTEGER(255),
      allowNull: true
    },
    gateway_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gateway_port: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    calculate_status: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    device_level: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    device_parent: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'device'
  });
};
