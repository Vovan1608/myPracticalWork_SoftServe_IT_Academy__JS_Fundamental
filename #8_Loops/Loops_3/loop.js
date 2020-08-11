var intN = 123456789012345;
var divider = 10;
while( (intN / divider) > 0) {
    numComponents = intN % divider;
    console.log(numComponents);
    intN = (intN - numComponents) / divider;
}