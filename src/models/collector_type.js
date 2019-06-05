/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('collector_type', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    des: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    des_code: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'collector_type'
  });
};
