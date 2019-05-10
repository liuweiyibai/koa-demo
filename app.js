const Koa = require("koa")
const app = new Koa()
const views = require("koa-views")
const json = require("koa-json")
const onerror = require("koa-onerror")
const bodyparser = require("koa-bodyparser")
const logger = require("koa-logger")
const jwtKoa = require("koa-jwt")

const handling401 = require("./middlewares/handling401")

const index = require("./routes/index")
const users = require("./routes/users")

const secret = "abc"

// error handler
onerror(app)
// 应用级中间键，对每一个路由都会生效
app.use(async (ctx, next) => {
  console.log(ctx.request.header)
  // await next() 进入下一个中间键
  await next()
})

app.use(handling401)
// 中间键,用来拦截请求头是否有token
app.use(
  jwtKoa({ secret }).unless({
    path: [/^\/login$/, /^\/register$/]
  })
)

app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"]
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
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 使用中间键来注册路由
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
// app.use(api.routes(), api.allowedMethods())

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx)
})

module.exports = app
