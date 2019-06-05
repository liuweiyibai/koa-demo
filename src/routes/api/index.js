const router = require("koa-router")()
const user = require("./router_user")

router.use(user.routes(), user.allowedMethods())
