'use strict';

function mul(...rest) {
    // Ваш код
    let res = 1;
    let count = 0;
    rest.forEach(function(i){
        if(typeof rest[i] === "number"){
            res *= rest[i];
            count++; 
        }
    });
    if(count){
        return res;
    }else{
        return 0;
    }
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0