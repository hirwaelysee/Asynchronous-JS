// 2. Applying abort controller on multiple fetching urls using a single abort controller.

/*
Use these urls to fetch from multiple urls and use abort controller.
https://dummyjson.com/users
https://dummyjson.com/posts
https://dummyjson.com/comments
*/

//creation of instance of abortController.

const controller = new AbortController();

const receiver = async() => {
    try {
        const urls = ["https://dummyjson.com/users","https://dummyjson.com/posts","https://dummyjson.com/comments"];

        const fetchUrls = urls.map((item,index) => fetch(item,{signal: controller.signal}));

        const [users, posts, comments] = await Promise.all(fetchUrls);

        const userData = await users.json();

        const postData = await posts.json();

        const commentData = await comments.json();

        console.log(userData);

        console.log(postData);

        console.log(commentData);

    } catch (error) {
        if(error.name == "AbortError"){
            console.error(`This is an abort error ${error.message}`)
        }else{
            console.error(`An error occurred ${error}`); 
        }
    }
}
receiver();
controller.abort()
