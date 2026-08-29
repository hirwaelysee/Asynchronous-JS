/*
2.Create a JavaScript program that converts a callback-based function into a Promise-based function.

function formatName(firstName, lastName, callback) {
    return callback(firstName,lastName);
}


function firstOutput(first, second){
    return `${first} ${second}`
}
*/
const receiver = new Promise((resolve,reject) =>{
    let first= 'Hirwa';
    let second = 'Elysee';

    if(typeof first == 'string' && typeof second == 'string'){
        resolve(`${first} ${second}`);
    }else{
        reject(`Error: the type of first and second is not string`);
    }
})

receiver
    .then((response)=> console.log(response))
    .catch((err)=> console.log(err));