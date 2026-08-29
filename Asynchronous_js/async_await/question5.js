/*
Write an async function that attempts to divide two numbers. 
If the denominator is zero, throw an error and handle it gracefully using a try/catch block.
*/

function divisor(num1, num2){
    return new Promise((resolve,reject)=>{
        if(num2 == 0){
           return reject(`Error: ${num2} is equal to zero`);
        }
            resolve(num1/num2)
        
    })
}

const handler = async() =>{
    try {
        const solution = await divisor(10,3);
        console.log(solution);
    } catch (error) {
        console.log(error);
    }
}
handler();