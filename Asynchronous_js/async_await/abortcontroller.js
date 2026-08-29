/*
https://jsonplaceholder.typicode.com/users

1. Applying the use of abort controller on a single fetching url
*/

/*
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
*/
// controller.abort();


// 2. Applying abort controller on multiple fetching urls.

/*
Use these urls to fetch from multiple urls and use abort controller.
https://dummyjson.com/users
https://dummyjson.com/posts
https://dummyjson.com/comments
*/

// const controller = new AbortController();
// console.log(controller)

// const receiver = async() => {
//     try {
//         const urls = ["https://dummyjson.com/users","https://dummyjson.com/posts","https://dummyjson.com/comments"];

//         const fetchUrls = urls.map((item,index) => fetch(item,{signal: controller.signal}));

//         const [users, posts, comments] = await Promise.all(fetchUrls);

//         const userData = await users.json();

//         const postData = await posts.json();

//         const commentData = await comments.json();

//         console.log(userData);

//         console.log(postData);

//         console.log(commentData);

//     } catch (error) {
//         if(error.name == "AbortError"){
//             console.error(`This is an abort error ${error.message}`)
//         }else{
//             console.error(`An error occurred ${error}`); 
//         }
//     }
// }
// receiver();
// controller.abort()

// 3. Applying abort controller on every url.

/*
https://dummyjson.com/users
https://dummyjson.com/posts
https://dummyjson.com/comments
*/

// const urls = ["https://dummyjson.com/users","https://dummyjson.com/posts","https://dummyjson.com/comments"];
// const controllers = urls.map(() => new AbortController());

// const receiver = async() =>{
//     try {

//         const fetchData = urls.map((item,index)=>{
//             return fetch(item,{signal: controllers[index].signal})
//         });

//         const [users, posts, comments] = await Promise.allSettled(fetchData);

//         if(!users.ok){
//             throw new Error(`User fetching is not working`);
//         }
//         if(!posts.ok){
//             throw new Error(`Posts fetching is not working`);
//         }
//         if(!comments.ok){
//             throw new Error(`Comments fetching is not working`);
//         }

//         const userData = await users.json();
//         const postData = await posts.json();
//         const commentsData = await comments.json();

//         console.log(userData);
//         console.log(postData);
//         console.log(commentsData);


//     } catch (error) {

//         if(error.name == "AbortError")
//         {
//             console.error(`This is an abort error ${error}`);
//         }
//         else
//         {
//             console.error(`This is not an abort error ${error}`)
//         }

//     }
// }
// receiver();
//controllers[1].abort()