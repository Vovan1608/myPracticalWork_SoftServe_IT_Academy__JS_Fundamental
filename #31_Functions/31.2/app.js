'use strict';

let obj = {
    name: "obj",
    print: function () {
       // Ваш код
        return  () => {
            console.log(this.name);
        }
    }
};
function multiCaller(func, count) {
    for (let i = 0; i < count; i++) {
        func();
    }
}
multiCaller(obj.print(), 3);  // "obj", 3 раза