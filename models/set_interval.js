/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('set_interval', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    hours: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    platform: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '3'
    },
    company_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'set_interval'
  });
};
