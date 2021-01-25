import Controller from "./Controller";
class IndexController extends Controller {
    constructor() {
        super();
    }
    async actionIndex(ctx){
        // throw new Error("这是一个错误信息");
        // ctx.body = "<p>路由配置成功了~</p>";
        // ctx.body = await ctx.render("index", {
        //     message: "后端数据渲染"
        // });
        ctx.body = "BFF架构IV"
    }
}

export default IndexController;