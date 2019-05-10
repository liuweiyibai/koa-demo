const router = require("koa-router")()

router.prefix("/users")

router.get("/:a/:b", function(ctx, next) {
  // ctx.query get传值
  // ctx.params 动态路由传值对象
  ctx.body = "this is a users response!"
})

router.get("/bar", function(ctx, next) {
  ctx.body = "this is a users/bar response"
})

module.exports = router
