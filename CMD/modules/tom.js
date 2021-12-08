define(function(require, exports, module){
    let name = 'Tom';
  	let getName = () => name;
    let setName = newName => name = newName;
    // module.exports = {
    //     getName,
    //     setName
    // }
    exports.getName = getName
    exports.setName = setName
});