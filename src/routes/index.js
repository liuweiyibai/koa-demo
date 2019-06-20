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
const router = require('koa-router')()

const openApi = require('./open/index')
const userApi = require('./api/router_user')
const businessApi = require('./api/r_bussiness')

router.use(openApi.routes(), openApi.allowedMethods())
router.use(userApi.routes(), userApi.allowedMethods())
router.use(businessApi.routes(), businessApi.allowedMethods())

router.get(`/register`, async ctx => {
  async function delay(time) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve()
      }, time)
    })
  }
  await delay(5000)
  ctx.body = {
    code: 200,
    data: 'fdssfs'
  }
})

// 上传图片，前端通过formData传递参数，实例代码

/**
 *   const _params = { ...this.params }
      _params.companyId = this.id
      const keys = Object.keys(_params)
      const formData = new FormData()
      keys.forEach(t => {
        formData.append(t, _params[t])
      })
 * export const uploadImagePeiDian = formData => {
  return request({
    url: `${ip}/distributionChart/upload`,
    // url:"http://192.168.1.72:3001/upload/image",
    method: 'post',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    // withCredentials:true
  }).then(res => res.data)
}

 * 
 */
router.post(`/upload/image`,async ctx=>{

  console.log(JSON.stringify(ctx.request.body,null,4))
  console.log(ctx.request.files)
  ctx.body = {
    code:200
  }
})
module.exports = router
