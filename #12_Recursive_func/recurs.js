function digitSum(k){
    const TEN = 10;
    if( k / TEN < 1 ){
        return k;
    }else{
        return  (k % TEN) + digitSum( parseInt(k / TEN) );
    }
}
console.log(digitSum(12345));
