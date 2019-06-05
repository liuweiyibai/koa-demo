// require('best-require')(process.cwd())
const router = require('koa-router')()

const businessController = require(':controllers/businessController')

router.post('/business', businessController.create)

router.put('/business', businessController.update)

router.get('/business', businessController.get)

module.exports = router
