const router = require("koa-router")()
const jwt = require("jsonwebtoken")

// 设置请求前缀
// router.prefix("/users")

// 用户登录接口
router.post(`/login`, async ctx => {
  ctx.body = "login"
})

router.get(`/login`, async ctx => {
  const token = jwt.sign({ foo: "bar" }, "abc")
  ctx.body = token
})

router.get("/:a/:b", function(ctx, next) {
  // ctx.query get传值
  // ctx.params 动态路由传值对象
  ctx.body = "this is a users response!"
})

router.get("/bar", function(ctx, next) {
  ctx.body = "this is a users/bar response"
})

module.exports = router
