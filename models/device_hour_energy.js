/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('device_hour_energy', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    company_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    device_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    day_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    h0: {
      type: "DOUBLE",
      allowNull: true
    },
    h1: {
      type: "DOUBLE",
      allowNull: true
    },
    h2: {
      type: "DOUBLE",
      allowNull: true
    },
    h3: {
      type: "DOUBLE",
      allowNull: true
    },
    h4: {
      type: "DOUBLE",
      allowNull: true
    },
    h5: {
      type: "DOUBLE",
      allowNull: true
    },
    h6: {
      type: "DOUBLE",
      allowNull: true
    },
    h7: {
      type: "DOUBLE",
      allowNull: true
    },
    h8: {
      type: "DOUBLE",
      allowNull: true
    },
    h9: {
      type: "DOUBLE",
      allowNull: true
    },
    h10: {
      type: "DOUBLE",
      allowNull: true
    },
    h11: {
      type: "DOUBLE",
      allowNull: true
    },
    h12: {
      type: "DOUBLE",
      allowNull: true
    },
    h13: {
      type: "DOUBLE",
      allowNull: true
    },
    h14: {
      type: "DOUBLE",
      allowNull: true
    },
    h15: {
      type: "DOUBLE",
      allowNull: true
    },
    h16: {
      type: "DOUBLE",
      allowNull: true
    },
    h17: {
      type: "DOUBLE",
      allowNull: true
    },
    h18: {
      type: "DOUBLE",
      allowNull: true
    },
    h19: {
      type: "DOUBLE",
      allowNull: true
    },
    h20: {
      type: "DOUBLE",
      allowNull: true
    },
    h21: {
      type: "DOUBLE",
      allowNull: true
    },
    h22: {
      type: "DOUBLE",
      allowNull: true
    },
    h23: {
      type: "DOUBLE",
      allowNull: true
    },
    h24: {
      type: "DOUBLE",
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'device_hour_energy'
  });
};
