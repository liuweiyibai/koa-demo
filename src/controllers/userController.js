// 控制器层，负责调用dao层，被router 调用
const UserDao = require('../dao/user')

class userController {
  static async create(ctx) {
    const params = ctx.request.body
  }

  static async list(ctx) {
    // console.log(2222222222222222222222222222222)
    let { keyword, areaId } = ctx.request.query
    keyword = keyword ? keyword : ''
    let { currentPage = 1, count = 10 } = ctx.request.ctx.request.query
    let offset = (currentPage - 1) * count
    const parmas = {
      limit: parseInt(count),
      offset,
      keyword,
      areaId
    }
    try {
      // 查询文章详情模型
      const data = await UserDao.getUserListByKeyword(parmas)
      ctx.response.status = 200
      ctx.body = {
        code: 200,
        msg: '查询成功',
        data: data
      }
    } catch (err) {
      ctx.response.status = 412
      ctx.body = {
        code: 412,
        msg: '查询失败',
        data: data
      }
    }
  }

  /**
   * 通过 id 查询用户详情
   * @param {*} ctx
   * @returns
   */
  static async detail(ctx) {
    const { id } = ctx.params
    console.log(2222222222222222222222222222222222222)
    const data = await UserDao.getUserDetailById(id)

    ctx.body = {
      code: 200,
      data
    }
  }

  /**
   * @param
   * @returns void
   *
   */
  static async destory(ctx) {
    const { id } = ctx.params
    const data = await UserDao.deleteUser(id)
    const message = data[0] === 1 ? 'success' : '删除失败'
    ctx.body = {
      code: 200,
      message
    }
  }

  /**
   *
   */
  static async destory(ctx) {}
}

module.exports = userController
