const path = require('path')

// 输出日志的目录
const outputLogsPath = path.resolve(__dirname, '../../logs')

// 错误日志目录
const errorLogPath = 'error'
// 错误日志文件名
const errorFilename = 'error'
// 完整错误文件路径
const errorLogFullPath = path.join(outputLogsPath, errorLogPath, errorFilename)

// 响应日志目录
const resLogPath = 'response'
// 响应日志文件名
const resFilename = 'response'
// 完整响应日志地址
const resLogFullPath = path.join(outputLogsPath, resLogPath, resFilename)

module.exports = {
  //日志格式等设置
  appenders: {
    'rule-console': { type: 'console' },
    errorLogger: {
      type: 'dateFile',
      filename: errorLogFullPath,
      pattern: '-yyyy-MM-dd-hh.log',
      alwaysIncludePattern: true,
      encoding: 'utf-8',
      numBackups: 3,
      path: errorLogPath
    },
    resLogger: {
      type: 'dateFile',
      filename: resLogFullPath,
      pattern: '-yyyy-MM-dd-hh.log',
      alwaysIncludePattern: true,
      encoding: 'utf-8',
      numBackups: 3,
      path: resLogPath
    }
  },
  //供外部调用的名称和对应设置定义
  categories: {
    default: { appenders: ['rule-console'], level: 'all' },
    resLogger: { appenders: ['resLogger'], level: 'info' },
    errorLogger: { appenders: ['errorLogger'], level: 'error' },
    http: { appenders: ['resLogger'], level: 'info' }
  },
  outputLogsPath
}
