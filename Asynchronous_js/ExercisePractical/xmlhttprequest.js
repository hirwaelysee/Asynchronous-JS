/*
Using only XMLHttpRequest , retrieve users from:

https://jsonplaceholder.typicode.com/users

Requirements:

1. Use `GET`.
2. The request must be asynchronous.
3. Parse the returned JSON.
4. Print only the users' names.
5. Handle HTTP errors such as `404` or `500`.
6. Handle network errors separately.

Expected output should resemble:

Leanne Graham
Ervin Howell
Clementine Bauch
...

You may start with:


function getUsers() {
  Your implementation
}

getUsers();

You may NOT use:

fetch()
axios
async/await

*/

function getUsers(url){
    return new Promise((resolve, reject)=>{

        //creation of XHR http request
        const xhr = new XMLHttpRequest();
        
        xhr.open("GET", url);

        xhr.onload = () =>{
            if(xhr.status >= 200 && xhr.status <= 300){
                const receiver = (JSON.parse(xhr.responseText)).map((item)=>{
                    return item.name
                });
                
                resolve(receiver.join('\n'))
            }else{
                reject("The promise is not working as expect!!");
            }
        }
        
        xhr.onerror = () =>{
            reject("The request didn't reach ur server pls check ur connection!!!");
        }

        xhr.send()

    })
}
getUsers('https://jsonplaceholder.typicode.com/users')
    .then((data) =>{
        console.log(data);
    })
    .catch((err)=>{
        console.error(err);
    })