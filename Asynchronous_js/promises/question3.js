/*
3. Implement a function that fetches data from  JSONPlaceholder API (https://jsonplaceholder.typicode.com/todos) 
and returns the data as a Promise. Handle any errors that may occur during the fetch
*/

const handler = async () =>{
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        
        if(!response.ok){
            throw new Error('Error: API is not working');
        }
        
        let data = await response.json();

        console.log(data)

    } catch (err) {
        console.log(err);
    }
}
handler();