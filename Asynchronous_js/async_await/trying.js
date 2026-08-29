// https://jsonplaceholder.typicode.com/todos


//using async and await.
const tester = async() =>{
    try {
        const handler = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        if(!handler.ok){
            throw new Error(`The API is not working`);
        }
        
        const data = await handler.json();
        console.log(data)

    } catch (error) {
        console.log(error);
    }
}
tester();

//using the then handler.
// fetch(`https://jsonplaceholder.typicode.com/todos`)
//     .then((response) =>{
//         if(!response.ok){
//             throw new Error(`Api is not working! `)
//         }
//         return response.json()
//     })
//     .then((data)=> console.log(data))
//     .catch((err)=> console.log(err));