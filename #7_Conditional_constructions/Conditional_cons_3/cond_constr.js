var intA = Number( prompt("Enter integer number a",""));
var intB = Number( prompt("Enter integer number b",""));
var intC = Number( prompt("Enter integer number c",""));
var intD = Number( prompt("Enter integer number d",""));
if(intA == intB && intB == intC){
    console.log("Serial number of a different number is 4.");
}else if(intB == intC && intC == intD){
    console.log("Serial number of a different number is 1.");
}else if(intA == intB && intB == intD){
    console.log("Serial number of a different number is 3.");
}else if(intA == intC && intC == intD){
    console.log("Serial number of a different number is 2.");
}
