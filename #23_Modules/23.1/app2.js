'use strict';

var area = (function(){
    var firstSide;
    var secondSide;
    function operation(){
        return firstSide * secondSide;
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
            if(this.isNumber(number)){
                firstSide = number;
            }else{
                firstSide = 1;
            }
        },
        setSecondSide: function(number){
            if(this.isNumber(number)){
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