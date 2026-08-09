/*
Task: Write a function named getEligibleUsers() that returns a Promise.

- Return only users whose active property is true.
- Remove duplicate users based on their id.
- Resolve with the final list of users.
*/
function getEligibleUsers(users){
    return new Promise((resolve, reject)=>{
      const receiver =  users
                        .filter(item => item.active)
                        .filter((it, index, arr)=>{
                           return arr.findIndex(u => u.id === it.id) === index
                        });
      resolve(receiver);
    })
}

const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 1, name: "Alice", active: true },
  { id: 3, name: "Charlie", active: true },
  { id: 4, name: "David", active: false },
  { id: 3, name: "Charlie", active: true }
];

getEligibleUsers(users)
  .then(item => console.log(item))
  .catch(err => console.error(err))


/*
Expected outcome
[
  { id: 1, name: "Alice", active: true },
  { id: 3, name: "Charlie", active: true }
]
*/