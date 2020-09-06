'use strict';

var area = (function(){
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
            }
        },
        setSecondSide: function(number){
            if(isNumber(number)){
                secondSide = number;
            }
        },
        operation: function(){
            return operation();
        }
    }
}());