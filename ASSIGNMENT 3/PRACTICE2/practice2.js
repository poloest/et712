let numInput = prompt("Enter a number, 0 to end:");

numInput = parseInt(numInput);

while(numInput != 0){
    numInput = prompt("Enter a number:");
    numInput = parseInt(numInput);

    if(numInput >= 100 && numInput <= 110){
        let text = `Congrats! You got the correct number: ${numInput}`;
        console.log(text);
    }
    else if(numInput >= 180 && numInput <= 190) {
        let text = `Good job, the number looks good: ${numInput}`;
        console.log(text);
    }
    else{
        let text = `You lose the game =(, your number: ${numInput}`;
        console.log(text);
    }
}