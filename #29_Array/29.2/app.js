﻿'use strict';

// Ваш код
Array.prototype.sortDesc = function(){
    this.sort();
    this.reverse();
}

let arr = [5, 1, 4, 2, 3];
arr.sortDesc();
console.log(arr); // [5, 4, 3, 2, 1]