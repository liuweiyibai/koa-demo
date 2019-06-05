const router = require("koa-router")()

router.get(`/company-list`, async ctx => {
  ctx.body = {
    code: 200,
    message: "请求企业列表"
  }
})

router.get("/company/:id", async ctx => {
  ctx.throw(500, "你特么在逗我")
})

router.get("/company/data", async ctx => {
  ctx.body = s
})

module.exports = router
