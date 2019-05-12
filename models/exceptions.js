/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('exceptions', {
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
    value: {
      type: DataTypes.FLOAT,
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
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    disposed: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    silent: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
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
    memorandum: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    operation_user: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    inform: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'exceptions'
  });
};
