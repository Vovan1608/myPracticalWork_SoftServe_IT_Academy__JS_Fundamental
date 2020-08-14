function createArrayIterator(array) {
    var i = -1;
    function iterate (){
        i++;
        return array[i];
    }
    return iterate;
}

var arr = [5, 3, 7];
var itr = createArrayIterator(arr);
console.log(itr()); // 5
console.log(itr()); // 3
console.log(itr()); // 7
console.log(itr()); // undefined 