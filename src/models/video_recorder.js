/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('video_recorder', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    device_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    model_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vendor_id: {
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
    channel_ip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    channel_port: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    enable: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    protocol_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    online: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    del: {
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
    }
  }, {
    tableName: 'video_recorder'
  });
};
