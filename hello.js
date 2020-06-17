const Koa = require('koa');
const app = new Koa();

// logger

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
    ctx.throw(new Error("Hello"))
})

app.listen(3000);