'use strict';

let rectangle = {
    x1: 1,
    y1: 2,
    x2: 6,
    y2: 8,
    toString: function(){
        return (
            "x1: " + this.x1 + 
            ", y1: " + this.y1 +  
            ", x2: " + this.x2 + 
            ", y2: " + this.y2
        );
    },
    valueOf: function(){
        let sideA = this.y2 - this.y1;
        let sideB = this.x2 - this.x1;
        let p = 2 * (sideA + sideB);
        return p;
    } 
}