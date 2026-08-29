/*
Fetch data from a real API and handle different types of errors:

jsx
API endpoints
const API_URL = "https://jsonplaceholder.typicode.com";

Task:

1. Fetch posts from: `${API_URL}/posts/1`
2. If successful, fetch the author's data from: `${API_URL}/users/{userId}`
3. Combine the post and author data
4. Handle these errors:
    - Network error (no internet)
    - Invalid response (not JSON)
    - Resource not found (404)
5. Print appropriate error messages for each case
*/
const handler = async() => {
    try {
        const userId = 1;

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);

        if(!response.ok){
            throw new Error(`Error the API is not working`)
        }

        const dataPosts = await response.json();

        console.log(dataPosts);

        const response1 = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        if(!response1.ok){
            throw new Error(`Error the second API is not working`);
        }
        
        const postsData = await response1.json();
        console.log(postsData)

    } catch (err) {   
        console.error(err);        
    }
}
handler()