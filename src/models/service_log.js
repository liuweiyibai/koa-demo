/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('service_log', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    device_no: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    customer_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    event_date: {
      type: DataTypes.DATE,
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
    tableName: 'service_log'
  });
};
