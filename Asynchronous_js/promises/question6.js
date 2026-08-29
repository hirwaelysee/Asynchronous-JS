/*
6. Create a function that receives a string and returns a Promise. 
The promise should resolve with the uppercase version of the string but reject if the string is null 
or undefined.
*/

function checker(strng){
    return new Promise((resolve,reject)=>{
        if(strng == 'null' || strng == 'undefined'){
            reject(`Input string is null or undefined`);
        }
        resolve(strng.toUpperCase());
    })
}
const receiver = async () =>{
    try {
        const input = 'undefined';
        const handler = await checker(input);   
        console.log(handler);
    } catch (error) {
        console.log(error);
    }
}
receiver();