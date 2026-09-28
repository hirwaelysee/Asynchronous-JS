/*
# Async Batch Processor

Create a function called `processInBatches`.

The function receives:

- An array of items.
- An asynchronous function used to process each item.
- A batch size.

The function should:

- Split the items into batches.
- Process all items in one batch concurrently.
- Wait until the entire batch finishes.
- Only then start the next batch.
- Return the results in the original item order.
- Continue processing even if some items fail.
- Store both successful results and errors.

Example:

```jsx
processInBatches(
  [1, 2, 3, 4, 5, 6, 7],
  processItem,
  3
);
```

The execution should behave approximately like:

```
Batch 1: 1, 2, 3
wait for all

Batch 2: 4, 5, 6
wait for all

Batch 3: 7
```

The next batch must never start before the previous batch has completely finished.

*/
const processItem = async(arr) =>{
  try{
    
    // const arr1 = arr.map(async(item)=>{
    //   let resp = await fetch(item);
    //   if(!resp.ok){
    //     throw new Error("An error occured");
    //   }
    //   return resp
    // });
    
    const resp = await Promise.all(arr);

    // const data = await resp;
    return resp;
  
  }catch(error){
     return(error);
  }
}

function processInBatches(item,processItem,size){
    for(let i=0; i<item.length; i+=size){
        let start = 0+i;
        let end = size+i;
        let tobeProcessed = item.slice(start,end);
        
        processItem(tobeProcessed)
          .then((resp)=> console.log(resp))
          .catch((err)=> console.log(err))
    }
  
}
console.log(processInBatches([1, 2, 3, 4, 5, 6,5,3,3,3,7],processItem,3));