const db = require("../config/db");
const User = db.import("../models/user");
const Role = db.import("../models/role");
const City = db.import("../models/city");
const Company = db.import("../models/company");

// 自动创建表
User.sync({ force: false });

// dao 层，负责与数据库的联络任务
class UserDao {
  static async getUserListByKeyword(data) {
    const { keyword, areaId, limit, offset } = data;
    let where = {
      username: {
        $like: `%${keyword}`
      },
      // 过滤掉del属性为1的元素，即已经删除的数据
      del: {
        $not: "1"
      }
    };
    if (areaId) {
      where = { ...where, areaId };
    }
    try {
      return await User.findAndCountAll({
        raw: true,
        limit,
        offset,
        distinct: true,
        attributes: {
          exclude: ["del"],
          // 将 db.col("role.name") 属性命名为 rname
          // 用户一对一用户角色
          include: [
            [db.col("role.name"), "rname"],
            [db.col("role.description"), "rdescription"],
            // city 字段 加入到user列表中
            [db.col("city.name"), "area_name"],
            [db.col("company.name"), "company_name"]
          ]
        },
        include: [
          {
            model: Role,
            as: "role",
            attributes: []
          },
          {
            model: City,
            as: "city",
            // 不指定arributes 即返回所有属性
            attributes: []
          },
          {
            model: Company,
            as: "company",
            attributes: []
          }
        ],
        where
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getUserDetailById(id) {
    try {
      // 通过id查询单个元素
      return await User.findByPk(id, {
        raw: true,
        distinct: true,
        attributes: {
          exclude: ["del"],
          // 将 db.col("role.name") 属性命名为 rname
          // 用户一对一用户角色
          include: [
            [db.col("role.name"), "rname"],
            [db.col("role.description"), "rdescription"],
            // city 字段 加入到user列表中
            [db.col("city.name"), "area_name"],
            [db.col("company.name"), "company_name"]
          ]
        },
        include: [
          {
            model: Role,
            as: "role",
            attributes: []
          },
          {
            model: City,
            as: "city",
            // 不指定arributes 即返回所有属性
            attributes: []
          },
          {
            model: Company,
            as: "company",
            attributes: []
          }
        ]
      });
    } catch (error) {
      throw new Error(error);
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
    );
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
      );
    } catch (error) {}
  }
}

module.exports = UserDao;
