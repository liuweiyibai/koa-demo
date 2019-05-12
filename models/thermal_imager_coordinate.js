/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('thermal_imager_coordinate', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    thermal_imager_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    P_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    P_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    P_3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    P_4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    P_5: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    P_6: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    A_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    A_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    A_3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    A_4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    A_5: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    A_6: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    collect_rate: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    error_temp: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'thermal_imager_coordinate'
  });
};
