var myArr = [];
var count = 0;
for(var i = 0; ; i++){
    myArr[i] = Number(prompt("Enter next number for array.", ""));
    if(myArr[i] == "" || isNaN( myArr[i] ) == true){
        break;
    } 
    count += myArr[i];
}
console.log("Sum of all numbers of array is: " + count);