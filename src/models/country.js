const db = require('../config/db')
const WorldCity = db.import('./world_city')

module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    'country',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
      }
    },
    {
      // 会使用 _ 连接字段 默认是使用驼峰命名即 false
      // underscored: false,
      tableName: 'country',
      // 会自动关联field createdAt到  created_at字段
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      freezeTableName: true
    }
  )
  // 源: 调用 sequelize 中关系方法的调用者
  // 目标: 调用 sequelize 中关系方法中的参数
  // hansMany 中会添加 countryId 到 WorldCity
  // 所以我们手动指定外键为 country_id
  Country.hasMany(WorldCity, {
    foreignKey: 'country_id',
    as: 'citys'
  })

  // 该方法会添加一对一关系到外键源模型上
  // belongsTo 会添加 countryId 到 worldCity ，所以手动指定外键 country_id
  WorldCity.belongsTo(Country, {
    foreignKey: 'country_id',
    sourceKey: 'id'
  })

  /**
   * hasOne 会添加 world_city_id 属性到 Country 模型中.
   * sourceKey: 对象的关联属性
   * foreignKey：目标对象的关联属性
   * WorldCity的 country_id === Country的id
   */
  // WorldCity.hasOne(Country, {
  //   foreignKey: 'id',
  //   sourceKey: 'country_id'
  // })
  return Country
}
