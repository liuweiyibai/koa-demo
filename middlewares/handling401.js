// 该中间键必须要在header token 验证之后调用，
// 理解koa的中间键执行顺序
module.exports = (ctx, next) => {
  return next().catch(err => {
    if (err.status === 401) {
      ctx.body = {
        code: 401,
        message: "受保护资源，使用授权字符获取访问权限"
      }
    } else {
      throw err
    }
  })
}
