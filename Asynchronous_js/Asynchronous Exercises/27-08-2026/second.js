/*
Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result
using Promises

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
*/

const fetchMultipleAPIs = async() =>{
    try {
        const receiver = []
        const apiUrls = ['https://jsonplaceholder.typicode.com/posts/4',
                        'https://jsonplaceholder.typicode.com/posts/5',
                        'https://jsonplaceholder.typicode.com/posts/6'];

        const urls = apiUrls.map((item) => fetch(item));

        const [post1, post2, post3] = await Promise.all(urls);
        
        const post1Data = await post1.json()
        receiver.push(post1Data)
        
        const post2Data = await post2.json()
        receiver.push(post2Data)
        
        const post3Data = await post3.json()
        receiver.push(post3Data)
        
        return receiver

    } catch (error) {
        return `The API are not working ${error}`;
    }
    
}
fetchMultipleAPIs()
    .then((data) => console.log(data))
    .catch((err)=> console.log(err))