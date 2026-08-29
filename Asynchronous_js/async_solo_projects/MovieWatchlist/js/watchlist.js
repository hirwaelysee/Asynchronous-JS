
const watch = document.getElementById('watch');
const mainSection = document.getElementById("mainsection")

function watchList(){
    let fromLocal = JSON.parse(localStorage.getItem('myWatchlist')) || [];

    if(fromLocal.length > 0){
      watch.style.display = "none";

      let display = ``;
      for(let item of fromLocal){
         display += `
         
                    <div class=" w-[45%] flex justify-between gap-x-4 p-2 ">

                        <div class=" w-1/5">
                            <img 
                                src="${item.poster}"
                                alt="movie image"
                                class="h-full w-full"
                                >
                        </div>

                        <div class=" w-4/5 flex flex-col gap-y-1">

                        <div class="flex gap-x-2 items-center">
                            <h4 class="font-inter font-semibold text-2xl">${item.title} ${item.year}</h4>
                            <p class="text-sm font-inter">⭐ 8.1</p>
                        </div>

                        <div class="flex gap-x-6 text-base">
                            <p>117 min</p>
                            <p>Action, Drama, Sci-fi</p>
                            <div class="flex justify-between  gap-x-1 items-center cursor-pointer" onclick="removeMovie('${item.id}')">
                                    <img 
                                    src="../assets/icons8-remove-16.png" 
                                    alt=""
                                    class="w-4 h-4"
                                    >
                                    <p class="text-sm text-black">Watchlist</p>
                            </div>
                        </div>

                        <p class="text-lg text-gray-500">A blade runner must pursue and terminate four <br> replicants who stole a ship in space, and have <br> returned to Earth to find their creator.</p>
                        
                        </div>

                    </div>
            
            <hr class="my-6 border-1 border-[#E5E7EB] w-[44%] ">   
                
            `
      }
      mainSection.innerHTML += display;
    }else{
        watch.style.display = "flex";
    }
}

watchList()

function removeMovie(id){
    let listOfMovies = JSON.parse(localStorage.getItem('myWatchlist')) || [];

    listOfMovies = listOfMovies.filter((item,index) => item.id !== id);

    localStorage.setItem("myWatchlist",JSON.stringify(listOfMovies));

    window.location.reload()
}