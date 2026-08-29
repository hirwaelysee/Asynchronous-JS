/*
5. Create a function that returns a Promise which rejects if given an invalid input (e.g., negative number).
Use .catch() to handle the error when calling this function.
*/

function integerNumbers(numb){
    return new Promise((resolve,reject)=>{
        if(numb<0){
            reject(`Error: Negative Number input`);
        }else{
            resolve(`Valid Input ${numb}`);
        }
    })
}

// using then handler.
integerNumbers(10)
    .then((item)=> console.log(item))
    .catch((err)=> console.log(err));

//using async and await handler.
const handler = async() =>{
    try {
        let num = 10;
        const receiver = await integerNumbers(num);
        console.log(receiver);   
    } catch (error) {
        console.log(error);
    }
}
handler();