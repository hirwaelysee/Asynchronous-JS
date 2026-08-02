const handler = receiver((item)=> fetch(item));

        // const data = []

        // try {
        //     const resp = await Promise.allSettled(handler);

        //     resp.forEach(element => {
        //         if(element.status == 'rejected'){
        //             console.error(element.reason);
        //         }else{
        //             data.push(element.value);
        //         }
        //     });

        //     for await(const info of data){
        //         console.log(info.json());
        //     }
            
        // } catch (error) {
        //     console.log(error);
        // }