/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('thermal_imager', {
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
    alias: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    model_id: {
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
    http_port: {
      type: DataTypes.INTEGER(255),
      allowNull: true
    },
    rtsp_port: {
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
    vendor_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    heat_status: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    video_status: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    nvr_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    online: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    hav_nvr: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    hav_ptz: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    network_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    video_nvr_stream: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    heat_nvr_stream: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    video_direct_stream: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    heat_direct_stream: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    camera_video_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    camera_thermal_code: {
      type: DataTypes.STRING(255),
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
    tableName: 'thermal_imager'
  });
};
