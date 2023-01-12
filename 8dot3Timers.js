function countDown(number){
    let timer = setInterval(function(){
        number--;
        if(number <= 0){
            clearInterval(timer);
            console.log('done');
          }
          else {
            console.log(number);
          }
    },1000)
}

function randomGame(){
    let random;
    let counter = 0;
    let timer = setInterval(function(){
        random = Math.random();
        counter++;
        if (random > .75){
            clearInterval(timer)
            console.log("it took " + counter + " times");
            }       
    }, 1000)
}