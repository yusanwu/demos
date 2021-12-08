define(function(require){
    let tom = require('./tom');
    console.log(tom.getName());
    tom.setName('timi');
    console.log(tom.getName());
});