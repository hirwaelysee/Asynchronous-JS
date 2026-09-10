function sendHttpRequest(method, url, data){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.onload = () =>{
            if(xhr.status>= 200 && xhr.status <=300){
                resolve(JSON.parse(xhr.response));
            }else{
                reject("The API is not working")
            }
        }
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onerror = () =>{
            reject('Something went wrong');
        }

        xhr.send(JSON.stringify(data));
    })
}

function getData(){
    sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/users')
        .then(resp => console.log(resp))
        .catch(err => console.log(err));
}

function sendData(){
    const data = {
        address: 'Kigali',
        company: 'MUA',
        email: 'elyhirw902@gmail.com',
        id: 1000,
        phone: '+250798840455',
        username: "hirwaelysee",
        website: "google.com"
    }

    sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/users', data)
        .then(data => console.log(data))
        .catch(err => console.error(err));
}

getData()
sendData();