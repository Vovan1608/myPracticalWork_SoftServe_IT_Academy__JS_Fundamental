'use strict';
function deleteEvenNumbers(array) {
    // Ваш код
    array = array.filter(function(elem){
        return (elem % 2 != 0);
    })
    return array;
}
var arr = [1, 2, 3, 4, 5];
var arr = deleteEvenNumbers(arr);
 console.log(arr); // [1, 3, 5]