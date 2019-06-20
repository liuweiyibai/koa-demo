const router = require('koa-router')()
const jwt = require('jsonwebtoken')
const userController = require('../../controllers/userController')

router.prefix('/user')

const secret = 'uiuiuiuiuiuiuiuiui'
const payload = {
  foo: 'bar'
}

// 用户登录
router.post(`/login`, async ctx => {
  const { username, password } = ctx.request.body
  if (username && password) {
    // 生成 token
    const token = jwt.sign(payload, secret, {
      algorithm: 'HS512'
    })
    console.log(token)
    ctx.body = { token }
  } else {
    ctx.body = {
      code: 200,
      message: '用户名或者密码不正确'
    }
  }
})

// 新增用户
router.post(`/`, async ctx => {
  ctx.body = {
    code: 200,
    messag: 'post user'
  }
})

// 删除用户
router.del(`/:id`, userController.destory)

// 修改用户
router.put('/:id', async ctx => {
  console.log(ctx.request.body)
  ctx.body = {
    code: 200,
    message: '修改参数'
  }
})

router.get('/current', async ctx => {
  const {
    header: { authorization }
  } = ctx
    ctx.body = {
      code:200,
      authorization
    }

  // const token = authorization.replace('Bearer ', '')
  // // 手动解析 token
  // const data = jwt.verify(token, secret, {
  //   algorithm: 'HS512'
  // })
  // // ctx.state 中包含 token 信息，所以不用手动解析
  // ctx.body = {
  //   code: 300,
  //   body: ctx.state,
  //   data
  // }
})

// 获取用户列表
router.get('/list', userController.list)

// 获取单个用户信息
router.get(`/detail/:id`, userController.detail)

module.exports = router
