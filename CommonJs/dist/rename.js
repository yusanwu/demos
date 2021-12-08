let tom = require("./tom");

console.log(`修改之前的名字：${tom.getName()}`);
tom.setName('Tomi');
console.log(`修改之后的名字：${tom.getName()}`);

// 若要在浏览器端使用 CommonJs 规范，则需要使用 browserify 编译该入口文件
// browserify dist/rename.js -o dist/bundle.js
// 然后 index.html 中直接引用 bundle.js 即可。