const fs = require('fs')
const path = require('path')
const logConfig = require('./LogConfig')
const keys = Object.keys(logConfig.appenders)

// 判断日志文件路径是否存在
const confirmLogPath = path_str => {
  if (!fs.existsSync(path_str)) {
    fs.mkdirSync(path_str)
    console.log(`创建日志文件完成${path_str}\n`)
  }
}

const initLogsPath = () => {
  // 创建logs目录以及error + response目录
  if (logConfig.baseLogPath) {
    confirmLogPath(logConfig.baseLogPath)
    for (let i = 1, len = keys.length; i < len; i++) {
      if (logConfig.appenders[keys[i]].path) {
        confirmLogPath(
          path.join(logConfig.baseLogPath, logConfig.appenders[keys[i]].path)
        )
      }
    }
  }
}

module.exports = initLogsPath
