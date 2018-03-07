const Koa = require('koa');
const fs = require('fs');
const app = new Koa();


//设置模板目录
const views = require('koa-views');
app.use(views(__dirname + '/views'));

//设置路由
const index = require('./routes/index');
app.use(index.routes(), index.allowedMethods())

//设置静态资源目录
const static = require('koa-static');
const main = static(__dirname + '/public');
app.use(main);

//设置端口
app.listen(3000);