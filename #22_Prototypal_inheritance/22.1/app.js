'use strict';

function GeometricFigure(centerX, centerY){
    if(this.__isNumber(centerX)){
        this.__centerX = centerX;
    }else{
        this.__centerX = 0;
    }
    if(this.__isNumber(centerY)){
        this.__centerY = centerY;
    }else{
        this.__centerY = 0;
    }
    
}

GeometricFigure.prototype.__isNumber = function (number) {
    if (typeof number === "number" && number >= 0) {
        return true;
    }else{
        return false;
    }
}

GeometricFigure.prototype.setCenterX = function(centerX){
    if(this.__isNumber(this.__centerX)){
        this.__centerX = centerX
    }
}

GeometricFigure.prototype.getCenterX = function(){
    return this.__centerX;
}

GeometricFigure.prototype.setCenterY = function(centerY){
    if(this.__isNumber(this.__centerY)){
        this.__centerY = centerY
    }
}

GeometricFigure.prototype.getCenterX = function(){
    return this.__centerY;
}
