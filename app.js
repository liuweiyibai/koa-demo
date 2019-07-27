require('./src/utils/pathAlias')
const Koa = require('koa')
// const websockify = require('koa-websocket')
// const app = websockify(new Koa())
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
// app.use(index.routes(), index.allowedMethods())

// 监听error事件
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

// // Using routes
// const router = require('koa-router')()
// app.ws.use(
//   router.all('/ws', async ctx => {
//     ctx.websocket.send('Hello World')
//     ctx.websocket.on('message', function(message) {
//       // do something with the message from client
//       console.log(message)
//     })
//   })
// )

const http = require('http')
const url = require('url')
const server = http.createServer(app.callback())

const WebSocket = require('ws')

// const wss1 = new WebSocket.Server({ server })
const wss1 = new WebSocket.Server({ noServer: true })
const wss2 = new WebSocket.Server({ noServer: true })

server.on('upgrade', (request, socket, head) => {
  const pathname = url.parse(request.url).pathname
  console.log(pathname)
  if (pathname === '/ws') {
    wss1.handleUpgrade(request, socket, head, function done(ws) {
      wss1.emit('connection', ws, request)
    })
  } else if (pathname === '/ws2') {
    wss2.handleUpgrade(request, socket, head, function done(ws) {
      wss2.emit('connection', ws, request)
    })
  } else {
    socket.destroy()
  }
})

const test = {
  time: '今天',
  companyName: '哈哈哈',
  deviceName: '企业',
  location: '天安门',
  content: 'baojingle',
  id: 1
}

wss1.on('connection', ws => {
  ws.on('message', meg => {})
  const timer = setInterval(() => {
    test.id = test.id++
    if (test.id === 25) {
      clearInterval(timer)
      return
    }
    ws.send(JSON.stringify(test))
  }, 10000)
})

wss2.on('connection', ws => {
  let number = 25
  ws.on('message', meg => {})
  const timer = setInterval(() => {
    if (test.id === 25) {
      clearInterval(timer)
      return
    }
    ws.send(JSON.stringify(number--))
  }, 10000)
})

module.exports = server
