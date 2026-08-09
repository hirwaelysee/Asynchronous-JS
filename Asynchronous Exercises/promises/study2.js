// const receiver = new Map([
//     [1,"Alice"],
//     [2,"Bob"],
//     [3,"Charlie"],
//     [4,"David"]
// ])
// console.log(receiver);
// async and wait

// async function fetchUserDetails(userId){

//     return {'name':'Robin', 'like':['pizza']};
// }

// async function caller(){
//     const user = await fetchUserDetails();
//     console.log(user);
// }

// caller()

// function getHi(){
//     return `Hi`;
// }
// async function caller1(){
//     const message = await getHi();
//     console.log(message);
// }
// caller1();

// const validateUser = ({userId, password}) =>{
//     return new Promise((resolve, reject)=>{
//         if(userId && password){
//             resolve('Authenticated');
//         }else{
//             reject('userId or password is missing');
//         }
//     })
// }

// const app = async () =>{
//     const data = {
//         userId: 'elysee',
//         password: 'Gendarmerie'
//     }

//     try {
//         const result = await validateUser(data);
//         console.log(result);    
//     } catch (e) {
//         console.log(e);
//     }
    
// }
// app()

// using async and await
// `https://www.thecolorapi.com/scheme?hex=${colorSel}&mode=${scheme}&count=5`


//api: https://pokeapi.co/api/v2/pokemon/${pokemonName}

const image = document.getElementById('image');
const text = document.getElementById('text');
const btn = document.getElementById('btn');

const checker = () =>{

    btn.addEventListener('click', async() =>{
        
        const pokemon = document.getElementById('pokemon').value.toLowerCase();
        
        
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            
            if(!response.ok){
                throw new Error(`Api is not working`);
            }
            
            const data = await response.json();
            
    
            //console.log(data);
            text.textContent = data.name;

            image.src = data.sprites.back_default;
            image.style.width = '500px';    
            image.style.display = 'block';
    
        } catch (error) {
            console.log(error);
        }
    })
}
checker();