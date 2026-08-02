function MentalModel(urls, limit){

    const getLinks = async() => {

        for(let i=0; i<urls.length; i+=limit){
            const receiver = urls.slice(i, i+limit);

            const handler = receiver.map((item)=> fetch(item));
        
            const data = [];

            try {
                const resp = await Promise.allSettled(handler);

                console.log(resp)
                resp.forEach(element => {
                    if(element.status == 'rejected') {
                        console.error(element.reason);
                    }else{
                        data.push(element.value);
                    }
                });

                for await(const info of data){
                    console.log(await info.json());
                }
                
            } catch (error) {
                console.log(error);
            }
        }
    }
    getLinks();
}

const urls = ['https://dummyjsoncom/users','https://dummyjson.com/posts','https://dummyjson.com/comments'];

MentalModel(urls,3);
