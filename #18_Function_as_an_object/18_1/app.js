'use strict';

function mul() {
    // Ваш код
    var res = 1;
    var count = 0;
    for (var i = 0; i < arguments.length; i++){
        if(typeof arguments[i] === "number"){
            res *= arguments[i];
            count++;
        }
    }
    if(count > 0){
        return res;
    }else{
        return 0;
    }
}
 console.log(mul(1, "str", 2, 3, true)); // 6
 console.log(mul(null, "str", false, true)); // 0
