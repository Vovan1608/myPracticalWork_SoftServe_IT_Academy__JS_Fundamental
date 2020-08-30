'use strict';

function bind(func, context) {
    // Ваш код
    return function(){
        return func.call(context);
    }
    
}
function func() {
    console.log(this.name + " - "+ this.age);
}
var user = {
    name: "Tom",
    age: 20
};
var f = bind(func, user);
f(); // "Tom – 20"

// var g = func.bind(user);
// g();