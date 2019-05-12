/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('release_version', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    android: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ios: {
      type: DataTypes.FLOAT,
      allowNull: true
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
    tableName: 'release_version'
  });
};
