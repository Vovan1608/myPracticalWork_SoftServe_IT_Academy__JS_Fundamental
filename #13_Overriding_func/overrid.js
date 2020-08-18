function format (data, type) {
    if(type === 'number'){
        return format = function() {
            data = Number(data);
            return data;
        }   
    }else if(type === 'string'){
        return format = function(){
            data = String(data);
            return data;
        }
    }else if(type === 'boolean'){
        return format = function(){
            data = Boolean(data);
            return data;
        }
    }else{
        return data;
    }
}

var originFormat = format;

originFormat("1", "number");
console.log(format()); // 1
console.log(typeof format()); // "number"

originFormat("Hello", "boolean");
console.log(format());// true
console.log(typeof format());// "boolean"

originFormat(true, "string");
console.log(format());// "true"
console.log(typeof format()); // "string"
