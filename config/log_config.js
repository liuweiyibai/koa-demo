const path = require("path")
const baseLogPath = path.resolve(__dirname, "../logs")

// 错误日志目录
const errorLogPath = "error"
// 错误日志文件名
const errorFilename = "error"
// 完成错误文件路径
const errorLogFullPath = path.join(baseLogPath, errorLogPath, errorFilename)

// 响应日志目录
const responseLogPath = "response"
// 响应日志文件名
const responseFilename = "response"
// 完整响应日志地址
const responseLogFullPath = path.join(
  baseLogPath,
  responseLogPath,
  responseFilename
)

module.exports = {
  // appenders: [
  //   //错误日志
  //   {
  //     category: "errorLogger", //logger名称
  //     type: "dateFile", //日志类型
  //     filename: errorLogFullPath, //日志输出位置
  //     alwaysIncludePattern: true, //是否总是有后缀名
  //     pattern: "-yyyy-MM-dd-hh.log", //后缀，每小时创建一个新的日志文件,
  //     path: errorLogPath
  //   },
  //   //响应日志
  //   {
  //     category: "resLogger",
  //     type: "dateFile",
  //     filename: responseLogFullPath,
  //     alwaysIncludePattern: true,
  //     pattern: "-yyyy-MM-dd-hh.log",
  //     path: responseLogPath
  //   }
  // ],
  //日志格式等设置
  appenders: {
    "rule-console": { type: "console" },
    errorLogger: {
      type: "dateFile",
      filename: errorLogFullPath,
      pattern: "-yyyy-MM-dd-hh.log",
      alwaysIncludePattern: true,
      encoding: "utf-8",
      numBackups: 3,
      path: errorLogPath
    },
    resLogger: {
      type: "dateFile",
      filename: responseLogFullPath,
      pattern: "-yyyy-MM-dd-hh.log",
      alwaysIncludePattern: true,
      encoding: "utf-8",
      numBackups: 3,
      path: responseLogPath
    }
  },
  //供外部调用的名称和对应设置定义
  categories: {
    default: { appenders: ["rule-console"], level: "all" },
    resLogger: { appenders: ["resLogger"], level: "info" },
    errorLogger: { appenders: ["errorLogger"], level: "error" },
    http: { appenders: ["resLogger"], level: "info" }
  },
  baseLogPath
}
