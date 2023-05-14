const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  let pageName = ctx.url.slice(1);
  ctx.set('Content-Type', 'text/html');
  if(ctx.url === '/'){
    ctx.body = `<h1>Welcome to index page</h1>`;
  } else if(ctx.url === '/about'){
    ctx.body = `<h1>Welcome to ${pageName} page</h1>`;
  } else if(ctx.url === '/contact'){
    ctx.body = `<h1>Welcome to ${pageName} page</h1>`;
  }
});

app.listen(3000);