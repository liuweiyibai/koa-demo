/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('device_params', {
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
    params_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    warn_up: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    warn_down: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    error_up: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    error_down: {
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
    },
    del: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    channel: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'device_params'
  });
};
