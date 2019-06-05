/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('energy_level', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    level: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    city_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    start_time: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    end_time: {
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
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'energy_level'
  });
};
