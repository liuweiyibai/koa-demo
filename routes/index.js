const router = require("koa-router")()
const path = require("path")
const fs = require("../utils/fs")
const readFile = async () => {
  try {
    const data = await fs.readFile(
      path.resolve(__dirname, "./users.js"),
      "utf8"
    )
    console.log(data.toString())
  } catch (e) {
    console.log(e)
  }
}

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Hello Koa 2!"
  })
})

router.get("/string", async (ctx, next) => {
  ctx.body = "koa2 string"
})

router.get("/json", async (ctx, next) => {
  await readFile()

  ctx.body = {
    title: "koa2 json"
  }
})

module.exports = router
