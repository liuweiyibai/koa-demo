/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onet_device_type', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    type_name: {
      type: DataTypes.STRING(255),
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
    tableName: 'onet_device_type'
  });
};
