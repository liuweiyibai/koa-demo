const BusinessDao = require("../dao/business");

class businessController {
  static async create(ctx) {
    const { name } = ctx.request.body;
    const params = { name };
    const result = await BusinessDao.create(params);
    if (result) {
      ctx.body = { code: 200, data: "新增成功" };
    } else {
      ctx.body = {
        code: 400,
        message: "当前项已存在"
      };
    }
  }

  static async update(ctx) {
    const { name, id } = ctx.request.body;
    const params = { name, id };
    const result = await BusinessDao.update(params);
    ctx.body = {
      code: 200,
      data: result[0] ? "success" : "fail"
    };
  }

  static async delete(ctx) {
    const { id } = ctx.params;
    const result = await BusinessDao.delete(id);
    ctx.body = {
      code: 200,
      data: result[0] ? "success" : "fail"
    };
  }

  /**
   *
   * @param {*} ctx
   * id 通过id查询单条
   * keyword 通过 关键字查询
   * 如果带有分页,需要添加 pageInfo 参数,没有 pageInfo 可以不传或者设置为 false 和 ''
   */
  static async get(ctx) {
    let { id, keyword, pageInfo } = ctx.request.query;
    let where = id
      ? { id }
      : false || keyword
      ? { name: keyword }
      : false || {};
    pageInfo ? pageInfo : false;
    let result;
    if (!pageInfo) {
      result = await BusinessDao.getAll(where);
    } else {
      result = await BusinessDao.get(where, pageInfo);
    }

    ctx.body = {
      code: 200,
      data: result
    };
  }
}

module.exports = businessController;
