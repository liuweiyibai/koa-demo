const router = require('koa-router')()
const db = require('../../config/db')
const Country = db.import('../../models/country')
const WorldCity = db.import('../../models/world_city')

const countrys = ['中华人民共和国', '美利坚众合国']

Country.sync({ alter: true })

router.prefix('/country')
// 新增
router.post(`/`, async ctx => {
  const result = []
  for (let i = 0, len = countrys.length; i < len; i++) {
    const c = await Country.findOrCreate({
      where: {
        name: countrys[i]
      },
      defaults: {
        name: countrys[i]
      }
    })
    result.push(c)
  }
  ctx.body = result
})

router.get(`/:id`, async ctx => {
  const { id } = ctx.params
  const result = await Country.findByPk(id, {
    include: [
      {
        model: WorldCity,
        as: "citys",
        // attributes: []
      }
    ]
  })
  ctx.body = result
})

module.exports = router
