/*
 Create a function that applies multiple transformations to a string using callbacks.
*/
function Upper(text){
    return text.toUpperCase();
}

function reverse(text,callback){
    return Upper(text).split('').reverse().join('')
}

function transformString(text, Upper, callback) {
    // Your code here
    return callback(text,Upper);
}
console.log(transformString("hello world",Upper,reverse))

// Input: "hello world"
// Expected output with uppercase and reverse callbacks:
// "DLROW OLLEH"