function pow(x, n){
    var res = x;
    for (var i = 2; i <= n; i++){
        res *= x;
    }
    return res;
}

console.log(pow(4, 5));

