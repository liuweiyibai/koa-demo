// const router = require("koa-router")()
// const path = require("path")
// const util = require("util")
// const jwt = require("jsonwebtoken")
// const fs = require("../utils/fs")
// const verify = util.promisify(jwt.verify)

// // 路由中间键
// async function hasPermission(ctx, next) {
//   console.log("执行reuest")
//   const random = Math.random().toFixed(2) * 100
//   if (random % 2 === 0) {
//     ctx.body = random
//   } else {
//     // 执行下一个中间键，等待中间键执行完毕，response的时候
//     console.log("执行中间键")
//     await next()
//     console.log("当前是响应")
//   }
// }

// const readFile = async () => {
//   try {
//     const data = await fs.readFile(
//       path.resolve(__dirname, "../static/json/mime.json"),
//       "utf8"
//     )
//     return data
//   } catch (e) {
//     console.log(e)
//   }
// }

// // ctx 上下文对象，包含req，res等信息
// router.get("/", async (ctx, next) => {
//   await ctx.render("index", {
//     title: "Hello Koa 2!"
//   })
// })

// router.get("/string", async (ctx, next) => {
//   // authorization
//   if ("authorization" in ctx.header) {
//     const token = ctx.header.authorization.split(" ")[1]
//     console.log(token)
//     const result = await verify(token, "abc")
//     console.log(result)
//     ctx.body = token
//   }
// })

// router.get("/json", hasPermission, async (ctx, next) => {
//   console.log("执行request对应函数")
//   try {
//     const result = await readFile()
//     ctx.body = {
//       ...JSON.parse(result)
//     }
//   } catch (e) {
//     ctx.body = JSON.stringify(e)
//   }
// })

// module.exports = router
const router = require("koa-router")();

const openApi = require("./open/index");
const apiUser = require("./api/router_user");
router.use(openApi.routes(), openApi.allowedMethods());
router.use(apiUser.routes(), apiUser.allowedMethods());

router.get(`/register`, async ctx => {
  ctx.body = {
    code: 200,
    message: "register"
  };
});
module.exports = router;
