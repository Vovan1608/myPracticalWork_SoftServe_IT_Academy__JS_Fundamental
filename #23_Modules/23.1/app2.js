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
            }
        },
        setSecondSide: function(number){
            if(this.isNumber(number)){
                secondSide = number;
            }
        },
        operation: function(){
            return operation();
        }
    }
}());