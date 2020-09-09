'use strict';

function sumSliceArray(arr, first, second){
    
    if(
        typeof first !== "number" || 
        typeof second !== "number" || 
        first > arr.length || 
        second > arr.length || 
        first <= 0 || second <= 0
    ){
        first = 1;
        second = arr.length;
        return arr[first - 1] + arr[second - 1];
    }else{
        return arr[first - 1] + arr[second - 1];
    }
}

var sum = sumSliceArray.apply(null, [[2, 4, 5, 7, 10], 11, 5]);

console.log(sum);