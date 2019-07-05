// SL - comment - no use strict,globals, bad style... I get 5 jshint warnings with my settings...
// SL - why is this here - but test using it in a different file?
let nums = [2, 4, 6];
function mymap(array, action) {
    // SL - comment - OK but why copy the array?
    // Why not just make a new empty one and iterate through old pushing onto new? I dont know for sure but think that would be more efficient then copying.
    let newArray = array.slice();
    for (let i = 0; i < array.length; i++) {
        newArray[i] = action(newArray[i]);
    }

    return newArray;
}
// SL - comment - Why is this here, but code using it elsewhere?
// Unless maybe you consider this a useful function your making available to be used (like mymap)
// as opposed to a one time use function used just to test...
// I actually think this would be a nice candidate for an arrow function where used..
function double(num) {
    return num * 2;
}

