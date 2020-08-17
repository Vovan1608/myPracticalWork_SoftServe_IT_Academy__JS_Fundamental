function calcRactParam(){
    var sideA = 0;
    var sideB = 0;
    
    function checkA(newSide) {
        if(newSide > 0){
            sideA = newSide;
        }
    }
    function checkB(newSide) {
        if(newSide > 0){
            sideB = newSide;
        }
    }

    function calcPerim(){
        if(sideA <= 0 || sideB <= 0){
            return 0;
        }else{
            return 2 * (sideA + sideB);
    }
    }

    function calcArea(){
        return sideA * sideB;
    }

    return [checkA, checkB, calcPerim, calcArea];
} 

var res = calcRactParam();
res[0](2);
res[1](3);
console.log("Perimeter is " + res[2]());
console.log("Area is " + res[3]());