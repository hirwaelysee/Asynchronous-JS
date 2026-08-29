/*
4. Write a function that takes an array of URLs, fetches data from each URL concurrently using Promise.all(),
and returns the combined results.

pokemon api: 'https://pokeapi.co/api/v2/pokemon/'
new api: 'https://jsonplaceholder.typicode.com/todos'
color api: 'https://www.thecolorapi.com/scheme'
*/

async function promises(urls){
    try {
        const receiver = urls.map(item => fetch(item));
        //console.log(receiver);

        const handler = Promise.all(receiver);
        //console.log(handler)
        
        const allPromises = await handler;
        //console.log(allPromises);

        const response = [];
        for(item of allPromises){
            if(!item.ok){
                throw new Error(`Api is not working`);
            }
            response.push(await item.json());
        }
        console.log(response)
        
    } catch (error) {
        console.log(error);
    }
}

promises(["https://pokeapi.co/api/v2/pokemon/","https://jsonplaceholder.typicode.com/todos","https://www.thecolorapi.com/scheme"])
