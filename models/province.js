/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('province', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
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
    },
    sys_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'province'
  });
};
