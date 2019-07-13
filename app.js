require('./src/utils/pathAlias')
const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const koaBody = require('koa-body')
const logger = require('koa-logger')
const jwtKoa = require('koa-jwt')
const cors = require('koa2-cors')
const response_formatter = require('./src/middlewares/response_formatter')
const logUtil = require('./src/syslog/logUtil')
const index = require('./src/routes/index')

const secret = 'uiuiuiuiuiuiuiuiui'

// error handler
onerror(app)

// 应用级中间键，对每一个路由都会生效
// app.use(async (ctx, next) => {
//   // await next() 进入下一个中间键
//   //
// })
// 注意中间键的顺序
// 最前面的中间键会最先调用也会最后调用
// app.use(response_formatter('^/open'))

// 跨域配置
app.use(
  cors({
    exposeHeaders: ['Xtoken'],
    credentials: true
  })
)

// 自定义请求头
app.use(async (ctx, next) => {
  if (ctx.header['xtoken']) {
    ctx.header['authorization'] = ctx.header.xtoken
  }
  await next()
})

// 中间键,用来拦截请求头是否有token
app.use(
  jwtKoa({ secret }).unless({
    path: [/^\/user\/login$/, /^\/register$/, /^\/open/, /^\/upload\/image/]
  })
)

app.use(
  koaBody({
    multipart: true // 支持文件上传
  })
)
app.use(json())
app.use(logger())

// 静态资源
// app.use(require("koa-static")(__dirname + "/public"))

// app.use(
//   views(__dirname + "/views", {
//     extension: "pug"
//   })
// )

// 日志打印
app.use(async (ctx, next) => {
  const start = new Date()
  let ms
  try {
    await next()
    ms = new Date() - start
    logUtil.logResponse(ctx, ms)
  } catch (error) {
    ms = new Date() - start
    // 错误继续向上抛，便于我们在response中统一拦截并且处理
    logUtil.logError(ctx, error, ms)
    ctx.throw(error)
  }
})

// 使用中间键来注册路由
app.use(index.routes(), index.allowedMethods())

// 监听error事件
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
