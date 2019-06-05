/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('collector_params', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    device_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true
    },
    rate: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ct: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pt: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    lct: {
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
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'collector_params'
  });
};
