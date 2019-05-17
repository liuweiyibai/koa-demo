const router = require('koa-router')()
const jwt = require('jsonwebtoken')
const db = require('../../config/db')
const User = db.import('../../models/user')
const Role = db.import('../../models/role')

router.prefix('/user')

// 用户登录
router.post(`/login`, async ctx => {
  const { username, password } = ctx.request.body
  if (username && password) {
    const token = jwt.sign({ foo: 'bar' }, 'abc')
    ctx.body = {
      token
    }
  } else {
    ctx.body = {
      code: 200,
      message: '用户名或者密码不正确'
    }
  }
})

// 新增用户
router.post(`/`, async ctx => {
  const { username, password } = ctx.request.body
  // findAll 返回空格式[]
  const beforeUser = await User.findAll({
    where: {
      username
    }
  })

  // 不存在就创建
  if (JSON.stringify(beforeUser) === '[]') {
    // 存在就给出提示
  } else {
    ctx.body = {
      code: 200,
      messag: '用户名已经存在'
    }
  }
})

// 删除用户
router.del(`/:id`, async ctx => {})

// 修改用户
router.put('/', async ctx => {})

// 查询用户列表
router.get(`/`, async ctx => {
  let { keyword } = ctx.request.query
  keyword = keyword ? keyword : ''
  const users = await User.findAll({
    raw: true,
    attributes: { exclude: ['del'] },
    include: [
      {
        model: Role,
        as: 'rname',
        attributes: ['name', 'description']
      }
    ],
    where: {
      username: {
        $like: `%${keyword}`
      }
    }
  })

  // for (let i = 0, len = users.length; i < len; i++) {
  //   const role = await users[i].getRole()
  //   if (role && 'name' in role) {
  //     users[i]['rname'] = role.name
  //     console.log(users[i])
  //   }
  // }

  // console.log()
  ctx.body = {
    code: 200,
    data:JSON.parse(JSON.stringify(users, null, 4) )
    // users.map(t => t.toJSON())
  }
})

// 获取单个用户信息
router.get(`/:id`, ctx => {
  ctx.body = '请求api/user/:id'
})

module.exports = router
