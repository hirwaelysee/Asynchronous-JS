/*
You have the following function:

```jsx
async function loadUserData() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const data = await response.json();

  console.log(data);
}
```

Modify it so that:

1. An `AbortController` is created.
2. The request receives the controller's `signal`.
3. The request is automatically cancelled after **2 seconds**.
4. If the request is aborted, print:

Request cancelled

1. Other errors should still be handled separately.
2. The timeout should be cleaned up when the request completes.

Expected structure:

async function loadUserData() {
  Your implementation
}
*/

const controller = new AbortController();

async function loadUserData() {
    
    try {
        const response = await fetch(
            "https://jsonplaceholdertypicode.com/users",
            { signal: controller.signal }
        );

        const data = await response.json();

        console.log(data);      
    } catch (error) {
        if(error.name == "AbortError"){
            console.error("Request Cancelled");
        }else{
            console.error(`${error}, the url is not working`);
        }     
    }
  
}
loadUserData();

setTimeout(()=>{
    controller.abort();
},2000)