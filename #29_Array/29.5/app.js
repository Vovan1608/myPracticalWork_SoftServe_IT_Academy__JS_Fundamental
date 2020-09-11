'use strict';

function matrixToArray(matrix) {
    // Ваш код
    let arr =[];
    arr = matrix.reduce(function(acc, next){
        return arr.concat(acc, next); 
    });
    return arr;
}
var arr = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
var arr = matrixToArray(arr);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]