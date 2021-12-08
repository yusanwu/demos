define(function(){
    let name = 'Tom';
  	let getName = () => name;
    let setName = newName => name = newName;
    return {
        getName,
        setName
    }
});

// define(function(require, exports, module) {
//     // var base = require('base');
//     let name = 'Tom';
//     exports.getName = () => name;
//     exports.setName = newName => name = newName;
// });