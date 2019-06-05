const ROOT_PATH = process.cwd()
require('best-require')(ROOT_PATH, {
  models: ROOT_PATH + '/src/models',
  dao: ROOT_PATH + '/src/dao',
  controllers: ROOT_PATH + '/src/controllers'
})
