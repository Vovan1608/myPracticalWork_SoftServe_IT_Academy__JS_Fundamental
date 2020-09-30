'use strict';
/*
Создайте следующую асинхронную цепочку promise:
new Promise(function (resolve, reject) {
   // Запрашиваем у пользователя число number при помощи prompt()
   // Если пользователь ввел не число - вызвать reject()
   // Если пользователь ввел число - вызвать resolve(number)
}).catch(function (error) {
    return new Promise(function (resolve, reject) {
      // Запрашиваем у пользователя число number, пока он его не введет
      // После ввода числа - вызвать resolve(number)
    });
}).then(function (result) {
   // Вывод number на экран
});
*/

new Promise(function (resolve, reject) {
    
    // Запрашиваем у пользователя число number при помощи prompt()
    let number = prompt("Enter number.", "");
    
    // Если пользователь ввел не число - вызвать reject()
    if(isNaN(number) || number === null || number === ""){
        return reject (error);
    }else{
    
        // Если пользователь ввел число - вызвать resolve(number)
        resolve(number);
    }
}).catch(function (error) {
    return new Promise(function (resolve, reject) {
        
        // Запрашиваем у пользователя число number, пока он его не введет
        do{
            var number = prompt("Enter number!","5");
        }while (isNaN(number) || number === null || number === " ");
        
        // После ввода числа - вызвать resolve(number)
        resolve(number);
    });
}).then(function (result) {
    // Вывод number на 
    console.log(result);
});