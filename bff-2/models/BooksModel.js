import SafeRequest from '../utils/safeRequest';
class BooksModel {
    getBooksList() {
        return SafeRequest.fetch('http://localhost/basic/web/index.php?r=books');
    }
    findBook(id) {
        return SafeRequest.fetch('http://localhost/basic/web/index.php?r=books');
    }
    // 其它接口
}
export default BooksModel;