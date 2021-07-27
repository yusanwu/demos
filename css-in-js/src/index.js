import index from "./index.css";
console.log(index);
let _html = `<div class="${index.content}">Hello World!</div>`;
document.getElementById('app').innerHTML = _html;