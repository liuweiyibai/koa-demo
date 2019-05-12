/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('iot_telecom_subsrcibe', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    subscribe_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subscribe_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    callback_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notify_type: {
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
    }
  }, {
    tableName: 'iot_telecom_subsrcibe'
  });
};
