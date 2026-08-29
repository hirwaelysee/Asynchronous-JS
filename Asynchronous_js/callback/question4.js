/*
Create a function that filters an array based on a callback test function.
*/
function filterArray(array, testCallback) {
    // Your code here
    return testCallback(array);
}
function even(array){
    return array.filter(item => item%2 == 0);
}
function odd(array){
    return array.filter(item => item %2 != 0)
}
console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],even));
console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],odd));

// Example array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Expected output with even number test: [2, 4, 6, 8, 10]
// Expected output with numbers greater than 5: [6, 7, 8, 9, 10]