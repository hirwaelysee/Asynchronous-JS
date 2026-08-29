/*
'https://pokeapi.co/api/v2/pokemon/'
*/

fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then((response) =>{
        if(!response.ok){
            throw new Error('Error: Promise is not working.')
        }
        return response.json()
    })
    .then((data) => console.log(data))
    .catch((err)=> console.error(err));