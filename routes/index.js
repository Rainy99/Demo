const fs = require('fs');
const router = require('koa-router')();

router.get('/:name',async (ctx, next) => {
    await ctx.render(ctx.params.name);
});

module.exports = router;