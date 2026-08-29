/*
1. Create a function that counts from 1 to 5, with a 1-second delay between each number,
using a callback to print each number.

*/
function printNumber(num){
    console.log(num);
}
function counter() {
    // Your code here
    for(let i=1; i<=5;i++){
        setTimeout(printNumber,1000,i)
    }
}

counter();
// Expected output (one number per second):
// 1
// 2
// 3
// 4
// 5