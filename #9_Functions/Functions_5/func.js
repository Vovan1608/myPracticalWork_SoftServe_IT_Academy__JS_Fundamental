function digitN(k, n) {
    // 1 
    // определил кол-во цифр в числе
    var countDigitK = 0;
    const TEN = 10;
    var clonK = k;
    while ((clonK / TEN) > 0) {
        countDigitK++;
        clonK = (clonK - (clonK % TEN)) / TEN;
    }
    // Если количество цифр в числе k меньше n, то функция возвращает -1
    if ((countDigitK - n) < 0) {
        return -1;
    }
    var dvderK = Math.pow(TEN, n);
    // Сама цифра
    var digN = parseInt((k % dvderK) * TEN / dvderK);
    return digN;
}

console.log(digitN(96825, 2));
console.log(digitN(1234589760213, 10));
console.log(digitN(95895, 6));
