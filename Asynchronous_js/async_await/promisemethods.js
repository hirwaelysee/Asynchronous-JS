/*
Question 2 - Promise methods
You are loading data for a dashboard:

const user = Promise.resolve("User loaded");
const orders = Promise.reject("Orders failed");
const notifications = Promise.resolve("Notifications loaded");


Implement these two requirements:

Case A: The dashboard should only display if all three requests succeed. If one fails, show an error instead.
Case B: The dashboard should display whatever data succeeds, even if one or more requests fail.
Also print which requests failed.

Choose the appropriate Promise method for each case and write the code.
*/


const user = Promise.resolve("User loaded");
const orders = Promise.resolve("Orders failed");
const notifications = Promise.reject("Notifications loaded");

//case A

// const receiver = async() =>{
//     try {
//         const response = await Promise.all([user, orders, notifications]);
        
//         response.forEach(resp => console.log(resp));
    
//     } catch (error) {

//         console.error(error)
//     }
// }
// receiver()

//case B
const handler = async() =>{
    try {
        const response = await Promise.allSettled([ user, orders, notifications]);

        for(let [index,item] of response.entries()){
            if(item.status == 'fulfilled'){
                console.log(`${item.value}`)
            }
            else{
                console.error(`${item.reason}`)
            }
        }
        
    } catch (error) {
        console.error(error);
    }
}
handler()
