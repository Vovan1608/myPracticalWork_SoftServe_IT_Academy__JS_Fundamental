'use strict';

var rectangle = (function(){
    var firstSide;
    var secondSide;
    function getPerimeter(){
        return 2 * (firstSide + secondSide);
    }
    function getArea(){
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
        getPerimeter: function(){
            return getPerimeter();
        },
        getArea: function(){
            return getArea();
        }
    }
}());

rectangle.setFirstSide(5);
rectangle.setSecondSide(10);
console.log(rectangle.getPerimeter());
console.log(rectangle.getArea());