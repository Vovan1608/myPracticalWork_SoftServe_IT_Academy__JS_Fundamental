'use strict';

var arr = ["Tom", "Sam", "Bob"];
var arrLength = [];
arrLength = arr.map(function(elem){
    return ("<li>" + elem + "</li>");
})

// for (var i = 0; i < arr.length; i++) {
//     arrLength[i] = "<li>" + arr[i] + "</li>";
// }
console.log(arrLength); // ["<li>Tom</li>", "<li>Sam</li>", "<li>Bob</li>"]