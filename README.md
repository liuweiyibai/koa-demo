# koa-demo

## 搭建项目

```bash
npm install koa-generator -g
koa2 [project-name]
cd [project-name] && npm install
```

## 常用中间键

`koa-bodyparser` 处理post请求的request的body对象，放到ctx.request.body中