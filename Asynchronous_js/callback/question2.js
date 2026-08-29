/*
Create a function that takes a first name, last name, and a callback function to format them in different ways.
*/
function formatName(firstName, lastName, callback) {
    return callback(firstName,lastName);
}


function firstOutput(first, second){
    return `${first} ${second}`
}
function secondOutput(first, second){
    return `${second.toUpperCase()}, ${first}`;
}
function thirdOutput(first, second){
    return `${first[0]}. ${second}`;
}

// Example usage:
console.log(formatName("John", "Doe", firstOutput));
console.log(formatName("John", "Doe", secondOutput));
console.log(formatName("John", "Doe", thirdOutput));

// Expected outputs (with different callbacks):
// "John Doe"
// "DOE, John"
// "J. Doe"