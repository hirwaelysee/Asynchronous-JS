/*
1.Create a Promise that resolves with the message "Success!" after 1 second or rejects with "Failure!"
after 1 second, based on a random condition.
*/

const receiver = new Promise((onfulfilled, onrejected)=>{
    let a = 10;
    let b = 10;
    if(a == b){
        setTimeout(()=>{
            onfulfilled(`a is equal to b`);
        },1000)
    }else{
        setTimeout(()=>{
            onrejected(`Error: a is not equal to b`);
        },1000)
    }
})

// using the then handler
// receiver
//     .then(item => console.log(item))
//     .catch(err => console.log(err))

// using async and await
const output = async() =>{
    try {
        const handler = await receiver;
        console.log(handler);

    } catch (error) {
        console.log(error);
    }
}
output()
