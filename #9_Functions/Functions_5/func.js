function digitN(k, n){
    
    // определил кол-во цифр в числе
    var countDigitK = 0;
    const DIVIDER = 10;
    var clonK = k;
    while( (clonK / DIVIDER) > 0){
        countDigitK++;
        clonK = (clonK - ( clonK % DIVIDER)) / DIVIDER;  
    }
    // Если количество цифр в числе k меньше n, то функция возвращает -1
    if( (countDigitK / n) < 1){
        return -1;
    }
    // Определил на что будем делить число k (если n=1 то на 10, n=2 то на 100 и т.д.)
    const MULTIPLIER = DIVIDER;
    var dividerN = DIVIDER;
    for(var i = 1; i < n; i++){
        dividerN = dividerN * MULTIPLIER;
    }
    // Сама цифра
    var digitN = parseInt ( (k % dividerN) * MULTIPLIER / dividerN );
    return digitN;
}

console.log(digitN(95895, 4));
console.log(digitN(1234589760213, 5));
