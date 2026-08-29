// api to use https://www.omdbapi.com/?apikey=89be20f3
// link to the documentation: https://www.omdbapi.com/

const btn = document.getElementById('btn');
const main1 = document.getElementById('main1');
const content = document.getElementById('content');
const explore = document.getElementById('exploring');


/* 
Requirements:
1. Two pages: index.html, and watchlist.html
2. On the index.html the search page calls to the OMDB API with the 
title searched for and displays search results.
3. Button to "add to watch list" which saves data to the local storage.
4. When you go to the watch list.html it should pull from the local storage
and displays the data from the local storage.

1. Implement a function that when a user types in it should display the movies use the input event.
2. It should fetch from the api and create html content to be displayed using the rest api json data.
3. Also implement the the watchlist button when clicked it should save the movie details to the local storage
4. Also implement the another another function that fetches the data from the local storage and displays them to the 
   other page with a button of remove to remove it from the local storage and delete it from the watchlist we had.
*/

const getData = () =>{
   btn.addEventListener('click', async () =>{
      try {
         const inputValue = document.getElementById('input').value;

         const response = await fetch(`https://www.omdbapi.com/?apikey=89be20f3&s=${inputValue}`);
         
         if(!response.ok){
            throw new Error(`Error the movie api is not working!!!`);
         }
         
         const data = await response.json();
         
         //console.log(data);

         if(data.Response == "False"){
            content.innerHTML = `<p>${data.Error}</p>`
            return;
         }

         appendData(data.Search);
         
      } catch (err) {
            console.error(err);
      }
   })
   
}
getData();

function appendData(data){

      let receiver = ``;

      for(let item of data){
         receiver += 
         `
            <div class=" w-[45%]  flex justify-between gap-x-4 p-2">

            <div class=" w-1/5">
                <img 
                    src="${item.Poster}"
                    alt="movie image"
                    class="h-full w-full"
                    >
            </div>

            <div class=" w-4/5 flex flex-col gap-y-1">

                <div class="flex gap-x-2 items-center">
                    <h4 class="font-inter font-semibold text-2xl">${item.Title} ${item.Year}</h4>
                    <p class="text-sm font-inter">⭐ 8.1</p>
                </div>

                <div class="flex gap-x-6 text-base">
                    <p>117 min</p>
                    <p>Action, Drama, Sci-fi</p>
                    <div class="flex justify-between  gap-x-1 items-center cursor-pointer" onclick="addLocalStorage('${item.imdbID}','${item.Title.replace(/'/g, "\\'")}','${item.Year}','${item.Poster}')">
                        <img 
                            src="./assets/Icon (1).png" 
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
      content.innerHTML = receiver;
}

function addLocalStorage(id, title, year, poster){
   
   //first check whether the movie is included in the localStorage.
   let watchlist = JSON.parse(localStorage.getItem('myWatchlist')) || [];

   const isAlreadyAdded = watchlist.some(movie => movie.id === id);

   if(isAlreadyAdded){
      alert(`${title} is already in your Watch_List!`);
      return;
   }
   
   // add the data to the localStorage.

   const movieData = {
      id: id,
      title: title,
      year: year,
      poster: poster
   }

   watchlist.push(movieData);

   localStorage.setItem('myWatchlist', JSON.stringify(watchlist));

   alert(`${title} has been added to your watchlist!`)
}