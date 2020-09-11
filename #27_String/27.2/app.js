'use strict';

let str;
while(str != "end"){
    str = prompt("Enter the string.", "end");
    let temp = 0;
    for(let i = 0; i < str.length; i++){
        if(str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58){
            temp++;
            break;
        }
    }
    if(temp > 0){
        console.log(str + " Numbers: " + str);
    }else{
        console.log(str + " No numbers: " + str);
    }
}
