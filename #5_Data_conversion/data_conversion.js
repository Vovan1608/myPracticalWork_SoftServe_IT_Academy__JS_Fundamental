var x = 1;
var y = 2;

var res1 = x + String(y);
console.log(res1); 
console.log(typeof res1); 

var res2 = Boolean(x) + String(y);
console.log(res2); 
console.log(typeof res2);

var res3 = Boolean(x + y);
console.log(res3); 
console.log(typeof res3);

var res4 = Math.sqrt(x - y);
console.log(res4); 
console.log(typeof res4); 