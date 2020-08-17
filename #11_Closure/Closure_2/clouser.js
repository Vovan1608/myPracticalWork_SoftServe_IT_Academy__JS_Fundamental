function calcRactParam(){
    var sideA = 1;
    var sideB = 1;
    
    function checkA(newSide) {
        if(newSide > 0 && typeof newSide == Number){
            sideA = newSide;
        }
    }
    function checkB(newSide) {
        if(newSide > 0 typeof newSide == Number){
            sideB = newSide;
        }
    }

    function calcPerim(){
            return 2 * (sideA + sideB);
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