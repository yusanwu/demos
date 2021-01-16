const Rize = require('rize');
const rize = new Rize()
rize
    .goto('http://localhost:3000/books/list')
    .assertTitle('图书列表')
    .assertSee('点击1231')
    .end() // Don't forget to call `end` function to exit browser!