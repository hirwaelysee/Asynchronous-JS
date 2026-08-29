/*
Implement a series of async functions that perform arithmetic operations:
one function adds two numbers, another multiplies the result by 2, and a third subtracts 5.
Chain these functions using await.
*/
function add(num1,num2){
    return new Promise((resolve,reject)=>{
        resolve(num1+num2);
    })
}
function multiply(response){
    return new Promise((resolve, reject)=>{
        resolve(response*2);
    })
}
function subtract(response){
    return new Promise((resolve,reject)=>{
        resolve(response-5);
    })
}


const addition = async() =>{
    let num1 = 2;
    let num2 = 4;
    
    const first = await add(num1,num2);
    console.log(first);
    
    const second = await multiply(first);
    console.log(second);
    
    const third = await subtract(second);
    console.log(third);
}

addition()

