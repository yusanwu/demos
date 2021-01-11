const Controller = require('./Controller');
class ApiController extends Controller {
    constructor(){
        super();
    }
    actionDataList(ctx){
        ctx.body = [
            {
                id:1,
                data:"a",
            },
            {
                id:2,
                data:"b",
            }
        ]
    }
}
module.exports = ApiController;