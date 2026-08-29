/*
Implement a function that fetches data from  JSONPlaceholder API (https://jsonplaceholder.typicode.com/todos) and returns 
the data as a Promise. Handle any errors that may occur during the fetch
*/
function data(){
    let receiver = fetch('https://jsonplaceholder.typicode.com/todos');

    try {
        receiver.then((response)=>{
            if(response.ok != true){
                throw new Error('The api is not working');
            }
            return response.json();
        })
        .then((data)=> console.log(data));
    } catch (error) {
        console.error(error);
    }
}
data();