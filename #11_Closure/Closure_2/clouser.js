function calcRactParam(){
    var sideA = 0;
    var sideB = 0;
    
    function checkA(newSide) {
        if(newSide > 0){
            sideA = newSide;
        }else{
            sideA = "wrong parameter";
        }
    }
    function checkB(newSide) {
        if(newSide > 0){
            sideB = newSide;
        }else{
            sideB = "wrong parameter";
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
res[1](7);
console.log("Perimeter is " + res[2]());
console.log("Area is " + res[3]());