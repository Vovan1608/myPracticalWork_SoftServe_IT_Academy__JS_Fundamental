'use strict';

function sumSliceArray(arr, first, second){
    
    var sum = arr[first - 1] + arr[second - 1];
    
    return sum;
}

var sum = sumSliceArray([1, 2, 3, 5, 6, 7, 8, 10], 1, 5);
console.log(sum);