let btn = document.getElementById('btn');
let colorBoxes = document.getElementsByClassName('color-box')
let colorCodes = document.querySelectorAll('.color-code')

btn.addEventListener('click', function(){
    let colorSel = document.getElementById('color').value.slice(1);
    let scheme = document.getElementById('schemes').value;
   
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorSel}&mode=${scheme}&count=5`,{method:'GET'})
    .then(response => {

        if(!response.ok){
            throw new Error("Could not fetch resources");
        }
        return response.json()

    })
    .then(data => {
    
        let array = data.colors.slice(0,5);
        array.forEach((el,index) => {
            colorBoxes[index].style.backgroundColor = el.hex.value;
            colorCodes[index].textContent = el.hex.value;  
        });
        array = [];

        colorCodes.forEach(item => {
            item.addEventListener("click",function(){ 
                navigator.clipboard.writeText(item.textContent)
                    .then(()=>{
                        console.log("text copied");
                    })
                    .catch(err=>{
                        console.error('Failed to copy', err);
                    })
            })
        })

    })
    .catch(error => console.error(error))
})