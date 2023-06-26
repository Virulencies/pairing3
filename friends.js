var array = [1, 10, 20, 30, 40, 50, 60, 70];
//console.log(array)//
function overThirty() {
    for (var i = 0; i < array.length; i++){
if (array[i] > 30) {
    console.log(array[i]);
}
}
}
overThirty();