function sign(x){
    if(x < 0){
        return -1;
    }else if(x > 0){
        return 1;
    }else{
        return 0;
    }
}
console.log("value is " + sign(5));
console.log("value is " + sign(0));
console.log("value is " + sign(-5));