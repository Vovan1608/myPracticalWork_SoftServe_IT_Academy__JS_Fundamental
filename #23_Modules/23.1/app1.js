'use strict';

var perimeter = (function(){
    var firstSide;
    var secondSide;
    function operation(){
        return 2 * (firstSide + secondSide);
    }
    return{
        isNumber: function(number){
            if(typeof number === "number" && number > 0){
                return true;
            }else{
                return false;
            }
        },
        setFirstSide: function(number){
            if(isNumber(number)){
                firstSide = number;
            }else{
                firstSide = 1;
            }
        },
        setSecondSide: function(number){
            if(isNumber(number)){
                secondSide = number;
            }else{
                secondSide = 1;
            }
        },
        operation: function(){
            return operation();
        }
    }
}());