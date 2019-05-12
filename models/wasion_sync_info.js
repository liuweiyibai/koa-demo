/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wasion_sync_info', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    device_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    company_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    group_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    real_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'wasion_sync_info'
  });
};
