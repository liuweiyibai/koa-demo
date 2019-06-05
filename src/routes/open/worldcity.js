const router = require('koa-router')()
const db = require('../../config/db')
const WorldCity = db.import('../../models/world_city')
const Country = db.import('../../models/country')

router.prefix('/worldcity')

WorldCity.sync({ alter: true })

const CITYS = {
  '0e570630-803f-11e9-8102-9be3720e04cd': [
    '河北省',
    '山西省',
    '辽宁省',
    '吉林省',
    '黑龙省',
    '江苏省',
    '浙江省',
    '安徽省',
    '福建省',
    '江西省',
    '山东省',
    '河南省',
    '湖北省',
    '湖南省',
    '广东省',
    '海南省',
    '四川省',
    '贵州省',
    '云南省',
    '陕西省',
    '甘肃省',
    '青海省',
    '台湾省',
    '北京市',
    '上海市',
    '重庆市',
    '天津市',
    '广西壮族自治区',
    '宁夏回族自治区',
    '西藏自治区',
    '新疆维吾尔自治区',
    '内蒙古自治区',
    '香港',
    '澳门'
  ],
  '865b8620-8043-11e9-baa5-5bf3dcb64c7d': [
    '阿拉巴马州',
    '阿拉斯加州',
    '亚利桑那州',
    '阿肯色州',
    '加利福尼亚州',
    '科罗拉多州',
    '康涅狄格州',
    '特拉华州',
    '佛罗里达州',
    '佐治亚州',
    '夏威夷州',
    '爱达荷州',
    '伊利诺伊州',
    '印第安纳州',
    '艾奥瓦州',
    '堪萨斯州',
    '肯塔基州',
    '路易斯安那州',
    '缅因州',
    '马里兰州',
    '马萨诸塞州',
    '密歇根州',
    '明尼苏达州',
    '密西西比州',
    '密苏里州',
    '蒙大拿州',
    '内布拉斯加州',
    '内华达州',
    '新罕布什尔州',
    '新泽西州',
    '新墨西哥州',
    '纽约州',
    '北卡罗来纳州',
    '北达科他州',
    '俄亥俄州',
    '俄克拉何马州',
    '俄勒冈州',
    '宾夕法尼亚州',
    '罗得岛州',
    '南卡罗来纳州',
    '南达科他州',
    '田纳西州',
    '得克萨斯州',
    '犹他州',
    '佛蒙特州',
    '弗吉尼亚州',
    '华盛顿州',
    '西弗吉尼亚州',
    '威斯康星州',
    '怀俄明州',
    '华盛顿哥伦比亚特区',
    '关岛'
  ]
}

router.post(`/china`, async ctx => {
  const id = '0e570630-803f-11e9-8102-9be3720e04cd'
  const result = []
  const len = CITYS[id].length
  for (let i = 0; i < len; i++) {
    const w = await WorldCity.findOrCreate({
      where: {
        name: CITYS[id][i]
      },
      defaults: {
        country_id: id,
        name: CITYS[id][i]
      }
    })
    result.push(w)
  }
  ctx.body = result
})

router.post('/america', async ctx => {
  const id = '865b8620-8043-11e9-baa5-5bf3dcb64c7d'
  const result = []
  const len = CITYS[id].length
  for (let i = 0; i < len; i++) {
    const w = await WorldCity.findOrCreate({
      where: {
        name: CITYS[id][i]
      },
      defaults: {
        country_id: id,
        name: CITYS[id][i]
      }
    })
    result.push(w)
  }
  ctx.body = result
})

router.get(`/:id`, async ctx => {
  const { id } = ctx.params
  const result = await WorldCity.findByPk(id, {
    include: [
      {
        model: Country
      }
    ]
  })
  ctx.body = result
})

module.exports = router
