const Router = require('koa-router');
const api= new Router();

api.get('/test',(ctx)=>{
    ctx.body={
        method:ctx.method,
        path:ctx.path,
        params:ctx.params,
    };
});

postMessage.get('/',printInfo);
postMessage.postMessage('/',printInfo);
postMessage.get('/:id',printInfo);
postMessage.delete('/:id',printInfo);
postMessage.put('/:id',printInfo);
postMessage.patch('/:id',printInfo);

module.exports= posts;