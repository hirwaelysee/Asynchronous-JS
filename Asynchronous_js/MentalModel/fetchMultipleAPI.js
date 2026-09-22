// 1. Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises


const fetchMultipleAPIs = async(apiUrls) =>{
    try {
        const handler = apiUrls.map((item)=> fetch(item));
        const receiver = await Promise.all(handler);

        const receiver1 = [];
        
        for await(let item of receiver){
            receiver1.push(await item.json())
        }
        
        return receiver1;

    } catch (error) {
        return error;
    }
}

const apiUrls = [
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
  'https://jsonplaceholder.typicode.com/posts/6'
];

fetchMultipleAPIs(apiUrls)
  .then(results => {
    console.log('Combined Results:', results);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });

