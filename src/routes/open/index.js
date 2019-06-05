const router = require('koa-router')()
// const db = require("../../config/db")
// const Sequelize = db.sequelize
// const company = Sequelize.import("../../models/company")
const company = require('./company')
const country = require('./country')

const worldcity = require('./worldcity')

router.prefix('/open')

// router.get(`/company_list`, async ctx => {
//   try {
//     // 查询时候忽略哪些属性
//     // attributes:[] 查询时显示哪些属性
//     const company_list = await company.findAll({
//       attributes: { exclude: ["logo", "del", "nav_flag"] }
//     })
//     const res_json = company_list.map(t => t.toJSON())
//     ctx.body = {
//       code: 200,
//       data: res_json
//     }
//   } catch (error) {
//     ctx.body = "获取企业列表出错"
//     console.log("获取企业列表出错")
//   }
// })

router.use(company.routes(), company.allowedMethods())
router.use(country.routes(), country.allowedMethods())
router.use(worldcity.routes(), worldcity.allowedMethods())

router.get(`/current`, ctx => {
  setTimeout(() => {
    ctx.body = {
      code: 200,
      data: 'fdssfs'
    }
  }, 10000)
})

module.exports = router
