require(['./tom'], function(_t){
    console.log(_t.getName());
    _t.setName('Linda');
    console.log(_t.getName());    
});