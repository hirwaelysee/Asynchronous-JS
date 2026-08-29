/*
Create three async functions that simulate different tasks (e.g., fetching user data, fetching posts,
fetching comments). Ensure they execute in sequence using await.

https://dummyjson.com/users
https://dummyjson.com/posts
https://dummyjson.com/comments
*/

const users =  async() =>{
    try {
        const response = await fetch(`https://dummyjson.com/users`);

        if(!response.ok){
            throw new Error(`Error: the users api doesn't work`);
        }

        const users = await response.json();
        console.log(users);

    } catch (error) {
        console.log(error);
    }
}

const comments =  async() =>{
    try {
        const response = await fetch(`https://dummyjson.com/comments`);

        if(!response.ok){
            throw new Error(`Error: the comments api doesn't work`);
        }

        const comments = await response.json();
        console.log(comments);

    } catch (error) {
        console.log(error);
    }
}

const posts =  async() =>{
    try {
        const response = await fetch(`https://dummyjson.com/posts`);

        if(!response.ok){
            throw new Error(`Error: the posts api doesn't work`);
        }

        const posts = await response.json();
        console.log(posts);

    } catch (error) {
        console.log(error);
    }
}

users();
comments();
posts();    