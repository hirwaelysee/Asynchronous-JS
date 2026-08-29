const redPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise red resolved");
    },1000) 
});

const greenPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("green");
    },3000) 
});

const bluePromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("blue");
    },5000) 
});

//const allPromises = Promise.race([redPromise,bluePromise,greenPromise]);

const receiver = async() =>{
    const handler = await Promise.resolve(redPromise);

    console.log(handler);
    
}
receiver();