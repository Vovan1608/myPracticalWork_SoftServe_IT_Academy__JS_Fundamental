var integerNum = Number( prompt ("Enter the integer number.", "0") );
if(integerNum == 0){
    console.log("Your number is zero.");
}else if(integerNum > 0 && integerNum % 2 == 0){
    console.log("Your number is  positive even.");
}else if(integerNum > 0 && integerNum % 2 != 0){
    console.log("Your number is positive odd.");
}else if(integerNum < 0 && integerNum % 2 == 0){
    console.log("Your number is negative even.");
}else {
    console.log("Your number is negative odd.");
}
