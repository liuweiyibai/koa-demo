/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('energy_report', {
    device_no: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    newest_val: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    today_val: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    yesterday_val: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    currMonth_val: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    lastMonth_val: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'energy_report'
  });
};
