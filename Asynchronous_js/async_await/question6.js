/*
Create a function called fetchUserTodos that uses the Promise.all() method to fetch users and todos 
concurrently from the provided API endpoints and combine them based on the userId.

The function should return a promise that resolves with the combined data.
Users endpoints https://jsonplaceholder.typicode.com/users
Todos endpoints https://jsonplaceholder.typicode.com/todos

The returned promise should resolve into an array of users, where each user object has a new key, todos.
This key should contain an array of todos that belong to the user, determined by matching the userId of the
todo with the id of the user.
User object may look like
{
    id: 10,
  name: 'Clementina DuBuque',
  ...
}

Todo object may look like
{
    userId: 5,
  completed: false,
    ...
}

The result array will have objects that look like

{
    id: 10,
  name: 'Clementina DuBuque',
  todos: [
        {
            userId: 10,
          completed: false,
            ...
        },
        {
            userId: 10,
          completed: false,
            ...
        }
    ]
    ...
}
*/
const fetchUserTodos = async () =>{
    try {
        const urls = ["https://jsonplaceholder.typicode.com/users","https://jsonplaceholder.typicode.com/todos"];
        
        const fetchEndPoints = urls.map((url => fetch(url)));
        
        const receiver = [];
        
        const response = await Promise.all(fetchEndPoints);

        for(const item of response){
            if(!item.ok){
                throw new Error(`Error some of the promises rejected`);
            }
            receiver.push(await item.json());

        }
        const [users,todos] = receiver;
        
        const result = users.map(user => {
            return {
                ...user,
                todos: todos.filter(todo => todo.userId === user.id)
            };
        });

        return result;

    } catch (err) {
        console.error(err);
    }
}
fetchUserTodos()
    .then(data => console.log(data))