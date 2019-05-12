const router = require("koa-router")();
const jwt = require("jsonwebtoken");

// 设置请求前缀
// router.prefix("/users")

// 用户登录接口
router.post(`/login`, async ctx => {
  console.log("====================================");
  console.log(ctx.request.body);
  console.log("====================================");

  ctx.body = "login";
});

router.get(`/login`, async ctx => {
  console.log(ctx.request.query);
  const token = jwt.sign({ foo: "bar" }, "abc");
  ctx.body = token;
});

router.del(`/login/:id`, async ctx => {
  console.log(ctx.params);
  ctx.body = "delete login";
});

router.put(`/login`, async ctx => {
  console.log("put login");
  console.log(ctx.request.body);
  ctx.body = "put login";
});

// router.get("/:a/:b", function(ctx, next) {
//   // ctx.query get传值
//   // ctx.params 动态路由传值对象
//   ctx.body = "this is a users response!";
// });

router.get("/bar", function(ctx, next) {
  ctx.body = "this is a users/bar response";
});

module.exports = router;
