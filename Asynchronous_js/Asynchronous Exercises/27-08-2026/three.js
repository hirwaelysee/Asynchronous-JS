/*
Create a function called myFetch that should work as a simple version of the native fetch() API.
The function myFetch should use the XMLHttpRequest to make a GET Request and return a promise that
resolves with the request’s response and rejects with an error if any.

function myFetch() {
	.... your code here
}

myFetch('https://my-random-api.com/data')
	.then(data => console.log(data))
	.catch(error => console.log('Error:', error));
*/

function myFetch(url){
    return new Promise((resolve,reject) =>{

        const ely = new XMLHttpRequest();
    
        ely.open("GET",url);
    
        console.log(ely)
        ely.onload = () =>{
            if(ely.readyState === 4 && ely.status === 200){
                resolve(JSON.parse(ely.responseText));                
            }else{
                reject(`Request Failed!`);
            }
        }
        ely.send()
    })
}

myFetch('https://jsonplaceholder.typicode.com/posts/4')
	.then(data => console.log(data))
	.catch(error => console.log('Error:', error));