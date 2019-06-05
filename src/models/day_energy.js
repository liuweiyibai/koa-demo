/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('day_energy', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    device_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    newest_value: {
      type: "DOUBLE",
      allowNull: true
    },
    use_value: {
      type: "DOUBLE",
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'day_energy'
  });
};
