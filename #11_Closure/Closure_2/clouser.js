function calcRactParam(){
    var sideA = 0.000000001;
    var sideB = 0.000000001;
    
    function checkA(newSide) {
        // результат typeof - строка, поэтому сравниваем со строкой 'number'
        if( typeof newSide === 'number' && newSide > 0 ){
            sideA = newSide;
        }
        
    }
    function checkB(newSide) {
        
        if(typeof newSide === 'number' && newSide > 0){
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