function calc(a, b, op){
    switch(op){
        case 1:
            return a - b;
        case 2:
            return a * b;
        case 3:
            return a / b;
        default:
            return a + b;
    }
}
console.log("res is " + calc(2, 3, 1));
console.log("res is " + calc(4, 5, 2));
console.log("res is " + calc(-8, 4, 3));
console.log("res is " + calc(-2, 5, 4));