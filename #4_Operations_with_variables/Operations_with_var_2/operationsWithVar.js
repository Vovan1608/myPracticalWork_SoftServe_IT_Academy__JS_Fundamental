var twoDigitNum = prompt("Enter the two-digit number.");
var divider = 10;
var dozensNum = parseInt( twoDigitNum / divider );
console.log("Dozens of the two-digit number are: " + dozensNum);
var unitsNum = twoDigitNum % divider;
console.log("Units of the two-digit number are: " +unitsNum);
