const db = require('../config/db')
const User = db.import('../models/user')
const Role = db.import('../models/role')
const City = db.import('../models/city')
const Company = db.import('../models/company')

const { Op } = db.Sequelize

// 自动创建表
User.sync({ force: false })

// dao 层，负责与数据库的联络任务
class UserDao {
  static async getUserListByKeyword(data) {
    const { keyword, areaId, limit, offset } = data
    let where = {
      username: {
        [Op.like]: `%${keyword}`
      },
      // 过滤掉del属性为1的元素，即已经删除的数据
      del: {
        [Op.not]: '1'
      }
    }
    if (areaId) {
      where = { ...where, areaId }
    }
    try {
      return await User.findAndCountAll({
        // 是否返回原始数据,在一对一的时候建议设置为true
        distinct: true, //这一句可以去重，它返回的 count 不会把你的 include 的数量算进去
        raw: true,
        limit,
        offset,
        attributes: {
          // 忽略当期主数据的 del 属性
          exclude: ['del'],
          // 将 db.col("role.name") 属性命名为 rname
          // 一对一的时候添加属性别名
          // 用户一对一用户角色
          include: [
            [db.col('role.name'), 'rname'],
            [db.col('role.description'), 'rdescription'],
            // city 字段 加入到user列表中
            [db.col('city.name'), 'area_name'],
            [db.col('company.name'), 'company_name']
          ]
        },
        include: [
          {
            model: Role,
            as: 'role',
            attributes: []
          },
          {
            model: City,
            as: 'city',
            // 这里要将  attributes 设置为[],不然会和 上面的
            // attribute 的 include 属性中已经指定了要显示哪些字段并且要要显示哪些别名
            attributes: []
          },
          {
            model: Company,
            as: 'company',
            attributes: []
          }
        ],
        where
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getUserDetailById(id) {
    try {
      // 通过id查询单个元素
      return await User.findByPk(id, {
        raw: true,
        distinct: true,
        attributes: {
          exclude: ['del'],
          // 将 db.col("role.name") 属性命名为 rname
          // 用户一对一用户角色
          include: [
            [db.col('role.name'), 'rname'],
            [db.col('role.description'), 'rdescription'],
            // city 字段 加入到user列表中
            [db.col('city.name'), 'area_name'],
            [db.col('company.name'), 'company_name']
          ]
        },
        include: [
          {
            model: Role,
            as: 'role',
            attributes: []
          },
          {
            model: City,
            as: 'city',
            // 不指定arributes 即返回所有属性
            attributes: []
          },
          {
            model: Company,
            as: 'company',
            attributes: []
          }
        ]
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  static async deleteUser(id) {
    return await User.update(
      { del: 1 },
      {
        where: {
          id
        }
      }
    )
  }

  static async updateUser(params) {
    try {
      return await User.update(
        { ...params },
        {
          where: {
            id: params.id
          }
        }
      )
    } catch (error) {}
  }
}

module.exports = UserDao
