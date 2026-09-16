/*
You have three API endpoints:

const urls = [
  "https://invalid.example.com/users",
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/2"
];

Your task is to request all three endpoints.

Requirements:

1. Use fetch().
2. Use a Promise static method.
3. A failed request must not automatically prevent successful requests from being considered.
4. Return the data from the first successful request.
5. HTTP responses such as 404 or 500 must also be treated as failures.
6. If every request fails, print:

All servers failed

Expected structure:

async function getFirstAvailableUser() {
  Your implementation
}

getFirstAvailableUser();

You should choose the Promise static method that best fits this requirement.
*/

async function getFirstAvailableUser(params) {
    try {
        const fetchUrls = params.map((item) => fetch(urls));

        const receiver = await Promise.any(fetchUrls);
        
        if(receiver.status == 404 || receiver.status == 500){
            throw new Error("The api are not working failed.")
        }
        
     
    } catch (error) {
        if(error.name = 'AggregateError'){
            console.error("All servers failed")
        }
    }   
}

const urls = [
  "https://invalid.example.com/users",
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/2"
];
getFirstAvailableUser(urls);