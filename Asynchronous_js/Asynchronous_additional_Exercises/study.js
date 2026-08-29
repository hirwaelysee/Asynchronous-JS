// let getUser = new Promise(function(resolve, reject){
//     const user = {
//         name: 'Elysee',
//         email: 'elyseehirwa@gmail.com',
//         password: 'password',
//         permission: ['db','hr','dev']
//     }
//     resolve(user);
// })

// getUser
//     .then(item =>{
//         console.log(`Got user name: ${item.name}`);
//         if(item.permission.includes('hr')){
//             throw new Error('You are not allowed');
//         }
//     })
//     .then(address =>{
//         console.log(`User address ${address}`)
//     })
//     .catch(err => {
//         console.log(err);
//     })

// const number = new Promise(function(resolve, reject){
//     resolve(10);
// })
// number.then(function(value){
//     value++;
//     console.log(value);
//     return value;
// }).then(function(value){
//     value = value + 10;
//     console.log(value);
//     return value;
// }).then(function(value){
//     value = value + 20;
//     console.log(value);
//     return value;
// })

// const promise = new Promise(function(resolve, reject){
//     resolve('Testing Finally!!');
// })

// promise.finally(function(){
//     console.log('Cleaned up');
// }).then(function(value){
//     console.log(value);
// })

const result = true;

const receiver = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(result){
                resolve(`Promise resolved successfully`);
            }else{
                reject(`Promise didn't resolve`);
            }
        },1000)
    })
}

receiver()
    .then((item)=>{
        console.log(item);
    })
    .catch((item)=>{
        console.log(item);
    })
    .finally(()=>{
        setTimeout(()=>{
            console.log('Finally the wait of the promise is over');
        },2000)
    })
