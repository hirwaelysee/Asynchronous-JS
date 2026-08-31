/*
https://jsonplaceholder.typicode.com/users

1. Applying the use of abort controller on a single fetching url
*/

//creation of abort instance.
const controller = new AbortController()


const receiver = async() =>{
    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users", {signal: controller.signal});
        
        if(!response.ok){
            throw new Error(`Error the api is not working`);
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {

        if(error.name == "AbortError"){
            console.log(`${error.name} The error is an abort controller error `)
        }else{
            console.log(error)
        }
    }    
}
receiver();
controller.abort("Failed");
console.log(controller.signal);



