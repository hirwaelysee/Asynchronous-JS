/*
Imagine you are developing a real-time news application that needs to fetch posts from three different sources 
to provide users with the latest updates.
The API endpoints for getting posts are:
https://dummyjson.com/posts
https://this-may-not-exist.com/posts
https://jsonplaceholder.typicode.com/posts
To ensure a seamless user experience, you should create a function called getFastPosts that fetches posts from 
these endpoints simultaneously (concurrently) and only presents data from the source that responds the quickest,
while ignoring slower or potentially unreliable sources.
Example of how the function should be used

getFastPosts() code here...

getFastPosts().then((posts) => {
    console.log(posts)
})
*/

const getFastPosts = async() =>{
    try {
        const urls = [`https://dummyjson.com/posts`,`https://this-may-not-exist.com/posts`,`https://jsonplaceholder.typicode.com/posts`];
    
        const fetchUrls = urls.map(url=> fetch(url));

        const response = await Promise.any(fetchUrls);  
        
        if(!response.ok){
            throw new Error(`Error the fastest promise is not working`);
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error(error)
    }
}
getFastPosts()