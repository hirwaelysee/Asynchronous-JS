/*
2. Create a function called `myFetch` that should work as a simple version of the native fetch() API. 
The function `myFetch` should use the XMLHttpRequest to make a `GET` Request and return a promise 
that resolves with the request’s response and rejects with an error if any.
    
    function myFetch() {
    	 .... your code here
    }
    
    myFetch('https://my-random-api.com/data')
    	.then(data => console.log(data))
    	.catch(error => console.log('Error:', error));
    
    
    Bonus points (optional)
    Make your fetch function perform other request methods like `POST` or receive request options.
*/

const myFetch = (url, method, data) =>{
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();

        xhr.open(
            method,
            url
        );

        xhr.onload = () =>{
            if(xhr.status >= 200 && xhr.status<= 300){
                resolve(JSON.parse(xhr.response));
            }else{
                reject("The API is not working");
            }
        }

        xhr.setRequestHeader('Content-Type', 'application/json');



        xhr.onerror = () =>{
            reject("the url is unreachable")
        }

        xhr.send(JSON.stringify(data));

    })
}

//getting the data from the url only
myFetch('https://my-random-api.com/data')
    .then(resp => console.log(resp))
    .catch(err => console.error(err));

//sending data to the url
myFetch('https://my-random-api.com/data','POST',{
    name: 'Elysee',
    age: '20',
    location: 'Kigali'
})