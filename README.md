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