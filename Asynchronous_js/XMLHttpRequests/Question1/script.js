const xhr = new XMLHttpRequest();

console.log("A:", xhr.readyState);

xhr.onreadystatechange = () => {
    console.log("B:", xhr.readyState);
};

xhr.open(
    "GET",
    "https://jsonplaceholder.typicode.com/users"
);

console.log("C:", xhr.readyState);

xhr.send();

console.log("D:", xhr.readyState); 