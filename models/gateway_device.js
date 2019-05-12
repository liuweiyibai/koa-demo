/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gateway_device', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gateway_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    port: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    collect_period: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'gateway_device'
  });
};
