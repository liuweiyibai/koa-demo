/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('command_queue', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    device_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    command: {
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
    }
  }, {
    tableName: 'command_queue'
  });
};
