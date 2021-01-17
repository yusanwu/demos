import Controller from "./Controller";
class ApiController extends Controller {
    constructor() {
        super();
    }
    async getBooksList(ctx){
        ctx.body = {
            data: [
                {
                    name: "三国演义",
                    price: 46
                },{
                    name: "西游记",
                    price: 48
                },{
                    name: "红楼梦",
                    price: 38
                },{
                    name: "水浒传",
                    price: 42
                }
            ]
        }
    }
}

export default ApiController;