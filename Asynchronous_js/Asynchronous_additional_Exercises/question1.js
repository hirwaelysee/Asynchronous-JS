/*
1.Create a Promise that resolves with the message "Success!"
after 1 second or rejects with "Failure!" after 1 second, based on a random condition.
*/
const receiver = new Promise((resolve, reject) => {
    let name = 'Elysee';
    if(name == 'Elysee'){
        setTimeout(function(){
            resolve('Success');
        }, 1000)
    }else{
        setTimeout(function(){
            reject(new Error("Failure"));
        },1000)
    }   
})
receiver.then((response)=> {
    console.log(response);
})
.catch((error)=> console.error(error));