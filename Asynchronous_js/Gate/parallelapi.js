/*
You need information about:

- One user
- Their posts
- Their todos

The endpoints are:


https://jsonplaceholder.typicode.com/users/1
https://jsonplaceholder.typicode.com/posts?userId=1
https://jsonplaceholder.typicode.com/todos?userId=1


Create:

async function getUserDashboard() {
  Your implementation
}
Requirements:

1. Start all three requests without unnecessarily waiting for one before starting 
another.
2. Wait until all required data has been retrieved.
3. Check that every HTTP response is successful.
4. Convert every response to JSON.
5. Return:

{
  user: ...,
  posts: ...,
  todos: ...
}

1. Handle errors using `try...catch`.

Do not make the three requests sequentially.
*/
async function getUserDashboard(urls) {
    try {

        const fetchUrls = urls.map((item) => fetch(item));

        const receiver = await Promise.all(fetchUrls);  
        console.log(receiver)      

        console.log(receiver)

        for await (let item of receiver){

          console.log(await item.json());
        
        }

    } catch (error) {
        console.log(error)
    }
}

let urls = ['https://jsonplaceholder.typicode.com/users/1','https://jsonplaceholder.typicode.com/posts?userId=1','https://jsonplaceholder.typicode.com/todos?userId=1'];

getUserDashboard(urls);