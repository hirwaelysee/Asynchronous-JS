/*
3. Create a calculator function that takes two numbers and a callback.
The callback should perform the mathematical operation.
*/

function calculate(num1, num2, operationCallback) {
    // Your code here
    return operationCallback(num1,num2)
}
function addition(num1,num2){
    return `${num1+num2}`;
}
function multiplication(num1,num2){
    return `${num1*num2}`;
}
function division(num1,num2){
    return `${num1/num2}`;
}

console.log(calculate(10,5,addition))
console.log(calculate(10,5,multiplication))
console.log(calculate(10,5,division))

// Expected outputs:
// Addition callback: 15 (for 10, 5)
// Multiplication callback: 50 (for 10, 5)
// Division callback: 2 (for 10, 5)