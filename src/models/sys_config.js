/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_config', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    android_version: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    android_content: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    android_link: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    ios_version: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ios_content: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    ios_link: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    wechat_link: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    about: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    run_env: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
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
      allowNull: true,
      defaultValue: ''
    },
    notice_email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    notice_phone: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    }
  }, {
    tableName: 'sys_config'
  });
};
