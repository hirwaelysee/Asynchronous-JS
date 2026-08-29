/*
pokemon api: 'https://pokeapi.co/api/v2/pokemon/'
new api: 'https://jsonplaceholder.typicode.com/todos'
color api: 'https://www.thecolorapi.com/scheme'
*/

// Pokemon API Promise
async function pokeMon(){
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);

        if(!response.ok){
            throw new Error(`Error: Pokemon API Promise rejected`);
        }

        return response.json();
    
    } catch (err) {
        return (err)   
    }
    
}

// new API Promises
async function newApi(){
    try {
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);

        if(!response.ok){
            throw new Error(`Error: new API Promise rejected`)
        }
    
        return response.json();

    } catch (err) {
        return (err)
    }
    

}

// color API Promise
async function colorAPI(){
        try {
            const response = await fetch(`https://www.thecolorapi.com/scheme`);

            if(!response.ok){
                throw new Error(`Error: Color API Promise rejected`)
            }
            return response.json();

        } catch (err) {
            return (err);
        }
}

// function to handle the promises using async and await

const handler = async() =>{
    
    //using promise.race returns a single output which one resolved or rejected fastest
    const fastest = await Promise.race([pokeMon(), colorAPI(), colorAPI()]);
    console.log(fastest);
}
handler()