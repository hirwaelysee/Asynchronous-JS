/*
Write an async function that returns a string after waiting for 2 seconds.
Use the setTimeout function to simulate the delay.
*/

function simulater(){
   return new Promise((resolve,reject)=>{
        (setTimeout(()=>{
            resolve(`Elysee`) ;
        },2000));
   }) 
}
async function receiver(){
    try {
        const handler = await simulater();
        console.log(handler);
    } catch (error) {
        console.log(error)
    }
    
}
receiver()
