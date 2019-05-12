/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('message_read', {
    message_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'message_read'
  });
};
