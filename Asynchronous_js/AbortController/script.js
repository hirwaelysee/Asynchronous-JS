const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const content = document.getElementById('content');

function calculate(){
    const worker = new Worker('worker.js');
    worker.onmessage = function(ev){

        console.log(ev.data)
        window.alert(`The sum from 1 to 1,000,000,000 is: ${ev.data}`);

    }
    worker.postMessage(1000000000);
}

function changeColor(){
    const colors = ['blue','red','green','black','grey'];
    let choice = Math.floor(Math.random() * colors.length);
    content.style.backgroundColor = colors[choice];
}

btn1.addEventListener('click', calculate);
btn2.addEventListener('click', changeColor);




