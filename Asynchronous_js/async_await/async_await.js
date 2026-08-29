/*
Simulated API calls

1. Using `async/await`, fetch a user with ID 1
2. After user is loaded, fetch that user's posts
3. Print the user data and their posts
4. Handle any errors with try-catch
*/
function fetchUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "John Doe", email: "john@example.com" });
    }, 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "First Post", userId: userId },
        { id: 2, title: "Second Post", userId: userId }
      ]);
    }, 800);
  });
}

const handler = async() =>{
    try {
        const userdata = await fetchUser(1);
        
        const posts = await fetchPosts(userdata.id);

        console.log(userdata);
        
        console.log(posts);
    } catch (error) {
        console.log(error);
    }
}
handler()