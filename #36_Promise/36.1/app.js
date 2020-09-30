'use strict';
/*
Напишите функцию createPromiseRandom(min, max, delay), которая возвращает
promise, который: 
    -переходит в состояние fulfilled, если min меньше max и
генерирует случайное число через delay миллисекунд в диапазоне от min до 
max;
    -переходит в состояние rejected, если min больше max и возвращает объект 
ошибки.
Для генерации случайных чисел можно использовать метод Math.random().
Примеры использования функции:
function createPromiseRandom(min, max, delay) {
    return new Promise(function (resolve, reject) {
      // Ваш код
    });
}
let p1 = createPromiseRandom(1, 100, 2000);
p1.then(Ваш код );
let p2 = createPromiseRandom(1000, 100, 3000);
p2.then( Ваш код );
Через две секунды, на экране должно появится случайной число от 1 до 100.
Через три секунды, на экране должна появится информация об ошибке.
*/

function createPromiseRandom(min, max, delay) {
    return new Promise(function (resolve, reject) {
      // Ваш код
        setTimeout(function () {
            
            let random = Math.round(Math.random() * (max - min) + min);
            
            if(min < max){
                resolve (random);
            }else{
                reject ("min > max");
            }
        }, delay);
    });
}

let p1 = createPromiseRandom(1, 100, 2000);
p1.then( 
    res => console.log(res),
    err => console.log(err)
);

let p2 = createPromiseRandom(1000, 100, 3000);
p2.then(
    res => console.log(res),
    err => console.log(err) 
);