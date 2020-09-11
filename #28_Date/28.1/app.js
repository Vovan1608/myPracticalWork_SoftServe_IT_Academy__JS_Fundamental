'use strict';

function addTwoDays(date){
    date = new Date();
    let myDate = new Date();
    let setMyDate = date.getDate() + 2;
    myDate.setDate(setMyDate);
    console.log(date);
    console.log(myDate);
}

addTwoDays();