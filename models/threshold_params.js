/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('threshold_params', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    param_number: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    param: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pindex: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    unit: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'threshold_params'
  });
};
