const data = {
  users: [
    { id: 1, name: "Regis" },
    { id: 2, name: "Alice" },
    { id: 3, name: "John" }
  ],

  orders: [
    { id: 101, userId: 1, product: "Laptop", price: 1200 },
    { id: 102, userId: 1, product: "Mouse", price: 25 },
    { id: 103, userId: 2, product: "Phone", price: 800 },
    { id: 104, userId: 2, product: "Headphones", price: 100 },
    { id: 105, userId: 3, product: "Keyboard", price: 70 }
  ]
};

function getUser(id) {
  const user = data.users.find(user => user.id === id);

  if (!user) {
    throw new Error("User not found");
  }

  return Promise.resolve(user);
}

function getOrders(userId) {
  const orders = data.orders.filter(order => order.userId === userId);

  if (orders.length === 0) {
    throw new Error("No orders found");
  }

  return Promise.resolve(orders);
}

function getOrderDetails(orderId) {
  const order = data.orders.find(order => order.id === orderId);

  if (!order) {
    throw new Error("Order not found");
  }

  return Promise.resolve(order);
}
/*
Task: Using Promises, get the following data in order:

Find a user by ID.
Get that user’s orders.
Get the details of the user’s first order.

Use the provided getUser(), getOrders(), and getOrderDetails() functions.
*/
const receiver = async() =>{
    try {
      const userId = await getUser(2); 
      console.log(userId)

      const orderId = await getOrders(userId.id)
      console.log(orderId)

      const orderDetails = await getOrderDetails(orderId[0].id)
      console.log(orderDetails)

    } catch (error) {
      console.log(error);
    }
}

receiver();
