var integerNum = prompt("Enter the num.");
console.log(
    "Is number " + integerNum + " odd three-digit? - " + 
    Boolean ( integerNum % 2 != 0 && 99 < integerNum && integerNum < 1000) 
);