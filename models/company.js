/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "company",
    {
      id: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: "",
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      alias: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      logo: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      city_id: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      lat: {
        type: "DOUBLE",
        allowNull: true
      },
      lng: {
        type: "DOUBLE",
        allowNull: true
      },
      contact_name: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      contact_phone: {
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
        defaultValue: "0"
      },
      nav_flag: {
        type: DataTypes.INTEGER(4),
        allowNull: true
      },
      platform: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "1"
      },
      use_type: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      main_total: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      main_capacity: {
        type: "DOUBLE",
        allowNull: true
      },
      thermal_imager: {
        type: DataTypes.INTEGER(4),
        allowNull: true
      },
      humiture_state: {
        type: DataTypes.INTEGER(4),
        allowNull: true,
        defaultValue: "0"
      },
      transformer_structure: {
        type: DataTypes.INTEGER(4),
        allowNull: true,
        defaultValue: "0"
      },
      power_period: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      business_id: {
        type: DataTypes.STRING(255),
        allowNull: true
      }
    },
    {
      tableName: "company",
      timestamps: false
    }
  );
};
