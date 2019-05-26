const db = require("../config/db");
const Business = db.import("../models/business");

const { Op } = db.Sequelize;
// 自动创建表
Business.sync({ force: false });

class BusinessDao {
  static async create(data) {
    const busines = await Business.findOne({
      where: {
        ...data
      }
    });
    if (!busines) {
      return await Business.create({
        ...data
      });
    }
    return false;
  }

  static async update(data) {
    const { name, id } = data;
    return await Business.update(
      {
        name
      },
      {
        where: {
          id
        }
      }
    );
  }

  static async delete(id) {
    return await Business.update(
      {
        del: 0
      },
      {
        where: {
          id
        }
      }
    );
  }

  // 带有分页
  static async get(data, pageInfo) {
    console.log(pageInfo.size)
    return await Business.findAll({
      limit: pageInfo.size,
      offset: pageInfo.page,
      attributes: { exclude: ["del"] },
      where: { ...data }
    });
  }

  // 没有分页
  static async getAll(data) {
    return await Business.findAll({
      attributes: { exclude: ["del"] },
      where: { ...data }
    });
  }
}

module.exports = BusinessDao;

/***
 * 
 * 
 * 
 *  [Op.or]: [
          {
            id
          },
          {
            name: {
              [Op.like]: `%${keyword}%`
            }
          }
        ]
 */
