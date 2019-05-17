/**
 * 返回统一的数据格式，比如响应code和响应message
 */
const response = {
  code: 0,
  message: ''
}
let response_status = null

module.exports = pattern => {
  return async (ctx, next) => {
    const reg = new RegExp(pattern)
    try {
      await next()
      // 通过正则匹配的url进行格式化
      if (reg.test(ctx.originalUrl)) {
        if (ctx.status) {
          response_status = ctx.status
        }
      } else {
        if (ctx.status === 404) {
          ctx.body = {
            code: 404,
            message: '您访问的api不存在'
          }
        }
      }
    } catch (error) {
      // 对应 ctx.throw(500,message)的错误
      // 以及 401 错误
      //  error.message
      console.log(Object.keys(error))
      console.log(error.message)
      //
      if (error.status) {
        response_status = error.status
      }
    } finally {
      console.log('====================================')
      console.log(response_status)
      console.log('====================================')
      if (response_status === 401) {
        ctx.body = {
          code: response_status,
          message: '受保护资源，使用授权字符获取访问权限'
        }
      }
    }
  }

  // try {
  //   await next()

  //   // return false
  //   // console.log(JSON.parse(ctx.body).message)
  //   // if (JSON.parse(ctx.body).message) {
  //   //   ctx.body = ctx.body
  //   //   console.log(ctx.body)
  //   //   return false
  //   // }
  //   // if (ctx.body) {
  //   //   ctx.body = {
  //   //     code: 200,
  //   //     message: "success",
  //   //     data: ctx.body
  //   //   }
  //   // } else {
  //   //   ctx.body = {
  //   //     code: 200,
  //   //     message: "success"
  //   //   }
  //   // }
  // } catch (err) {
  //   if (err.status) {
  //     response_status = err.status
  //   }
  //   if (err.status === 401) {
  //     ctx.body = {
  //       code: 401,
  //       message: "受保护资源，使用授权字符获取访问权限"
  //     }
  //   } else if (err.status === 500) {
  //     ctx.body = {
  //       code: 500,
  //       message: "服务器内部错误"
  //     }
  //   } else if (err.status === 404) {
  //     ctx.body = {
  //       code: 404,
  //       message: "接口不存在"
  //     }
  //   }
  // } finally {
  //   console.log(response_status)
  // }
}
