'use strict';

function random(min, max, delay, callback) {
    // Ваш код
    var error;
    var num;
    if(min > max){
        error = new Error("Invalid parameters");
    }else{
        num = parseInt(Math.random() * 100);
    }

    setTimeout(function(){callback(error, num)}, delay);
}
random(1, 100, 2000, function (error, data) {
    // Ваш код
    if(error){
        throw error;
    }
    console.log(data)
});
random(1000, 100, 3000, function (error, data) {
    // Ваш код
    if(error){
        throw error;
    }
    console.log(data)
});
