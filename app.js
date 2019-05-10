const Koa = require("koa")
const app = new Koa()
const views = require("koa-views")
const json = require("koa-json")
const onerror = require("koa-onerror")
const bodyparser = require("koa-bodyparser")
const logger = require("koa-logger")

const index = require("./routes/index")
const users = require("./routes/users")

// error handler
onerror(app)

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"]
  })
)
app.use(json())
app.use(logger())
app.use(require("koa-static")(__dirname + "/public"))

// 中间键
app.use(async (ctx, next) => {
  console.log(ctx.request.header)
  // await next() 进入下一个中间键
  await next()
})

app.use(
  views(__dirname + "/views", {
    extension: "pug"
  })
)

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
