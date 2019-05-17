# koa-demo

## 搭建项目

```bash
npm install koa-generator -g
koa2 [project-name]
cd [project-name] && npm install
```

## 常用中间键

`koa-bodyparser` 处理post请求的request的body对象，放到ctx.request.body中
`koa-body` 用来代替前者，该中间键可以支持文件上传 http://www.ptbird.cn/koa-body.html

## mysql 

sql orm 框架 

- typeorm
- sequelize

```bash
npm install --save mysql2 # mysql 驱动
npm install --save sequelize  #mysql orm
```

## 参考链接

koa教程
https://www.cnblogs.com/Leo_wl/p/8436357.html


整体项目结构

https://www.cnblogs.com/smartsensor/p/7838169.html

## jwt校验

```bash
npm i jsonwebtoken # 生成token
npm i koa-jwt  # 解析token ，并且校验header中是否存在token
```

## 接口组成类型

```url
ip/port/api/功能类型/具体功能
```

## apply 的使用

```js
const fs = require("fs")
const util = require("util")
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

module.exports = {
  readFile: (...args) => {
    return util.promisify(fs.readFile).apply(null, [...args])
  }
}
```

## 使用body-parser解析请求参数

```js
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"]
  })
);
```


## 跨域请求
```bash
npm i koa2-cors
```

## 获取请求参数

```js
ctx.request.body // post参数
ctx.params // 路由参数
ctx.request.query // get参数
```