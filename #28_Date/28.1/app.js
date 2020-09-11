'use strict';

function addTwoDays(date){
    date = new Date(date);
    let modifiedDate = new Date (date);
    modifiedDate.setDate(date.getDate() + 2);
    return modifiedDate;
}

let b = addTwoDays("2020, 5, 25");
console.log(b)
