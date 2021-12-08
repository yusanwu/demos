import Controller from "./Controller";
import BooksModel from "../models/BooksModel";
class BooksController extends Controller {
    constructor() {
        super();
    }
    async getBooksList(ctx){
        // let booksModel = new BooksModel();
        // 从 model 层获取数据
        // let data = await booksModel.getBooksList();
        // 返回
        // ctx.body = await ctx.render('books/list', { data });
        ctx.body = await ctx.render('books/pages/list', { data });
    }
    async getBooksCreate(ctx){
        // let booksModel = new BooksModel();
        // 从 model 层获取数据
        // let data = await booksModel.getBooksList();
        // 返回
        // ctx.body = await ctx.render('books/list', { data });
        ctx.body = await ctx.render('books/pages/create', { data });
    }
}

export default BooksController;