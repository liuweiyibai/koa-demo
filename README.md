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

https://www.cnblogs.com/Leo_wl/p/8436357.html

## 