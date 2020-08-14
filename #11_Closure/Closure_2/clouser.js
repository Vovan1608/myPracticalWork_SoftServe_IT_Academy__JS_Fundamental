function calcRactParam(sideA, sideB){
    if(sideA > 0 && sideB > 0){
        function calcPerim(){
            return 2 * (sideA + sideB);
        }

        function calcArea(){
            return sideA * sideB;
        }

        return [calcPerim,calcArea];
    }
} 

var res = calcRactParam(4, 5);
console.log(res[0]());
console.log(res[1]());
console.dir(res[0])