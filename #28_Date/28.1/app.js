'use strict';


function addTwoDays(date){
    date.setDate(date.getDate() + 2);
    return date;
}

let date = new Date("2020, 5, 25");
let modDay = addTwoDays(date);
console.log(modDay);