const Rize = require("rize");
const rize = new Rize();
rize
    // 打开项目中的页面
    .goto("http://localhost:3000/books/list")
    // 检查页面标题
    .assertTitle("图书列表")
    // 检测页面内容
    .assertSee("水浒传")
    // 一定要记住关闭无头浏览器！
    .end();