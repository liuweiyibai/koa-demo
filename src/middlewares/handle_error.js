module.exports = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    // 自定义错误或者响应信息
    err.status = err.statusCode || err.status || 500
    ctx.body = err.message
    // 将错误上抛，被app.on到
    ctx.app.emit('error', err, ctx)
  }
}
