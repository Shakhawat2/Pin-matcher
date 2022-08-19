function setRandomNumber(){
    const randomNumber1 = randomNumber();
    if(randomNumber1.toString().length === 4){
        return randomNumber1;
    }
    else{
        return setRandomNumber();
    }
}
function randomNumber(){
    const random = Math.round(Math.random()*10000);
    return random;
}
