import Router from '@koa/router';

import IndexController from './IndexController';
const indexController = new IndexController();
import ApiController from './ApiController';
const apiController = new ApiController();
import BooksController from './BooksController';
const booksController = new BooksController();
const router = new Router();

function initController(app) {

    router.get('/', indexController.actionIndex);
    router.get('/api/getBooksList', apiController.actionBooksList);
    router.get('/books/list', booksController.actionBooksList);
    app
        .use(router.routes())
        .use(router.allowedMethods());
}
export default initController;