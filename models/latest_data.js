/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('latest_data', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    device_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    value: {
      type: "DOUBLE",
      allowNull: true
    },
    des: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    unit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'latest_data'
  });
};
