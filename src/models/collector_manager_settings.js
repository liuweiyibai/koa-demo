/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('collector_manager_settings', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ping: {
      type: DataTypes.DATE,
      allowNull: true
    },
    online: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'collector_manager_settings'
  });
};
