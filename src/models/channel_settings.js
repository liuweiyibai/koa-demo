/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('channel_settings', {
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
    channel_index: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    channel_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    channel_alias: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'channel_settings'
  });
};
