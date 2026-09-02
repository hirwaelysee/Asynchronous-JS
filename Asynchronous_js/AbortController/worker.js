onmessage = function(e) {
    let sum = 0;
    for(let i=1; i<=e.data; i++){
        sum += i;
    }
    this.postMessage(sum);
}