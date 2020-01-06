let nums = [2, 4, 6];
function mymap(array, action) {
    let newArray = array.slice();
    for (let i = 0; i < array.length; i++) {
        newArray[i] = action(newArray[i]);
    }

    return newArray;
}
function double(num) {
    return num * 2;
}

