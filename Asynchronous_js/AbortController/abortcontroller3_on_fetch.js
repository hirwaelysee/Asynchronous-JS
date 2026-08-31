// 3. Applying abort controller on every url.

/*
https://dummyjson.com/users
https://dummyjson.com/posts
https://dummyjson.com/comments

*/

const urls = ["https://dummyjson.com/users","https://dummyjson.com/posts","https://dummyjson.com/comments"];

const controllers = urls.map(() => new AbortController());

const receiver = async() => {
    try {

        const fetchData = urls.map((item,index) => {
            return fetch(item,{signal: controllers[index].signal})
        });

        const [users, posts, comments] = await Promise.allSettled(fetchData);
        
        // for users if promise is rejected
        if(users.status === "rejected") {
            throw users.reason;
        }

        //for posts if promise is rejected
        if(posts.status === "rejected") {
            throw posts.reason;
        }

        //for comments if promise is rejected.
        if(comments.status === "rejected") {
            throw comments.reason;
        }

        const userData = await users.value.json();
        const postData = await posts.value.json();
        const commentsData = await comments.value.json();

        console.log(userData);
        console.log(postData);
        console.log(commentsData);


    } catch (error) {

        if(error.name == "AbortError")
        {
            console.error(`This is an abort error ${error}`);
        }
        else
        {
            console.error(`This is not an abort error ${error}`)
        }

    }
}

receiver();

setTimeout(()=>{
    controllers[1].abort();
},10)