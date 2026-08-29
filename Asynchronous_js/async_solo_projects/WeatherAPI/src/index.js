const btn = document.getElementById('btn');


// https://handlers.education.launchcode.org/static/weather.json

const fetchData = () =>{
    btn.addEventListener('click', async() => {
        try {
            const receiver = document.getElementById('receiver');

            const resp = await fetch("https://handlers.education.launchcode.org/static/weather.json");
            
            if(!resp.ok){
                throw new Error(`Error the api is not working`);
            }
    
            const data = await resp.json();
            console.log(data)
            
            receiver.innerHTML = `
                                    <div class=" flex flex-col gap-y-4">
                                        <h3 class="font-semibold text-md">The chance of precipation: ${data.chanceOfPrecipitation}</h3>
                                        <h4 class="font-semibold text-md">Weather status: 🌞${data.status}</h4>
                                    </div>
                                    <div class="flex flex-col gap-y-4">
                                        <h3 class="font-semibold text-md">Weather Temp: ${data.temp}</h3>
                                        <h4 class="font-semibold text-md">Weather Max Temp: ${data.tempMax}</h4>
                                    </div>
                                    <div class="flex flex-col gap-y-4">
                                        <h3 class="font-semibold text-md">Weather Min Temp: ${data.tempMin}</h3>
                                        <h4 class="font-semibold text-md">Weather windSpeed: ${data.windSpeed}</h4>
                                    </div>
                                `
        }
        catch (error) {      
            console.error(error);    
        }
    })
}
fetchData()