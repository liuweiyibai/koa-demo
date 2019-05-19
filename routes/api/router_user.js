const router = require("koa-router")();
const jwt = require("jsonwebtoken");
const userController = require("../../controllers/userController");

router.prefix("/user");

// 用户登录
router.post(`/login`, async ctx => {
  const { username, password } = ctx.request.body;
  if (username && password) {
    const token = jwt.sign({ foo: "bar" }, "abc");
    ctx.body = { token };
  } else {
    ctx.body = {
      code: 200,
      message: "用户名或者密码不正确"
    };
  }
});

// 新增用户
router.post(`/`, async ctx => {
  ctx.body = {
    code: 200,
    messag: "post user"
  };
});

// 删除用户
router.del(`/:id`, userController.destory);

// 修改用户
router.put("/", async ctx => {
  console.log(ctx.request.body);
  ctx.body = {
    code: 200,
    message: "修改参数"
  };
});

// 获取用户列表
router.get("/", userController.list);

// 获取单个用户信息
router.get(`/:id`, userController.detail);

module.exports = router;
