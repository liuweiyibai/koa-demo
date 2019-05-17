const router = require("./node_modules/koa-router")()
const user = require("./router_user")

router.use(user.routes(), user.all)
