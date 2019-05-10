const router = require("koa-router")()
const path = require("path")
const fs = require("../utils/fs")

// 路由中间键
async function hasPermission(ctx, next) {
  const random = Math.random().toFixed(2) * 100
  if (random % 2 === 0) {
    ctx.body = random
  } else {
    await next()
  }
}

const readFile = async () => {
  try {
    const data = await fs.readFile(
      path.resolve(__dirname, "../static/json/mime.json"),
      "utf8"
    )
    return data
  } catch (e) {
    console.log(e)
  }
}

// ctx 上下文对象，包含req，res等信息
router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Hello Koa 2!"
  })
})

router.get("/string", async (ctx, next) => {
  ctx.body = "koa2 string"
})

router.get("/json", hasPermission, async (ctx, next) => {
  try {
    const result = await readFile()
    ctx.body = {
      ...JSON.parse(result)
    }
  } catch (e) {
    ctx.body = JSON.stringify(e)
  }
})

module.exports = router
