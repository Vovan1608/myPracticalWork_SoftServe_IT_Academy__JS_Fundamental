'use strict';

function bind(func, context) {
    // Ваш код
    
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