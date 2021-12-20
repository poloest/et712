let highScore = 0;
let currentScore = 10;
let userInput = [];
let randomNumber;

const resetButton = document.getElementById('resetButton');
const checkButton = document.getElementById('submitButton');
const startButton = document.getElementById('startButton');
const textBox = document.getElementById('userInput');
const guessList = document.getElementById('guessList');
const currentScoreText = document.getElementById('currentScore');
const highScoreText = document.getElementById('highScore');
const hint = document.getElementById('hint');
let rx = new RegExp(/^-?\d+$/); 

textBox.disabled = true;
checkButton.disabled = true;
resetButton.disabled = true;

function shakeHint(message){
    hint.textContent = message;
    $("#hint").effect( "shake" );
}

function resetGame(){
    currentScore = 10;
    userInput = [];
    randomNumber = Math.floor(Math.random() * 100) + 1;
    
    textBox.value = "";
    currentScoreText.textContent = `Score: ${currentScore}`;
    highScoreText.textContent = `High Score: ${highScore}`;
    hint.textContent = "Test your luck!";
    guessList.textContent = "Your guesses will appear here.";

    textBox.disabled = false;
    checkButton.disabled = false;
    resetButton.disabled = false;
    startButton.disabled = true;
    
    $('#winAlert').hide();
    $('#loseAlert').hide();
    $("#hint").effect("bounce");
}

startButton.addEventListener('click', resetGame);
resetButton.addEventListener('click', resetGame);

checkButton.addEventListener('click', function(){
    if(textBox.value === ""){
        shakeHint("Wrong Input! Only numbers are accepted!");
    }
    else if(rx.test(textBox.value) == false){
        shakeHint("Wrong Input! Only whole numbers are accepted!");
    }
    else if(textBox.value < 1 || textBox.value > 100){
        shakeHint("Enter within range of 1 - 100 only!");
    }
    else if(userInput.includes(textBox.value)){
        shakeHint("You guessed that already! Try again");
    }
    else if(textBox.value > randomNumber){
        if(textBox.value - randomNumber <= 5)
            shakeHint("You missed it by a hair! Go lower.");
        else if(textBox.value - randomNumber <= 10)
            shakeHint("You're almost there! Try a little bit lower.");
        else if(textBox.value - randomNumber <= 20)
            shakeHint("Not quite there but close! Try a lower number.");
        else
            shakeHint("Your guess is too high! Try again.");
        
        userInput.push(textBox.value);
        currentScore--;
        currentScoreText.textContent = `Score: ${currentScore}`;
    }
    else if(textBox.value < randomNumber){
        if(randomNumber - textBox.Value <= 5)
            shakeHint("You missed it by a hair! Go higher.");
        else if(randomNumber - textBox.Value <= 10)
            shakeHint("You're almost there! Try a little bit higher.");
        else if(randomNumber - textBox.Value <= 20)
            shakeHint("Not quite there but close! Try a higher number.");
        else
            shakeHint("Your guess is too low! Try again.");
        
        userInput.push(textBox.value);
        currentScore--;
        currentScoreText.textContent = `Score: ${currentScore}`;
    }
    else if(textBox.value == randomNumber){
        userInput.push(textBox.value);
        hint.textContent = "Correct!";
        $('#winAlert').show();
        if(highScore < currentScore){
            highScore = currentScore;
        }
        highScoreText.textContent = `High Score: ${highScore}`;
        textBox.disabled = true;
        checkButton.disabled = true;
        resetButton.disabled = true;
        startButton.disabled = false;
    }
    if(currentScore == 0){
        hint.textContent = "You lost the game!";
        textBox.disabled = true;
        checkButton.disabled = true;
        resetButton.disabled = true;
        startButton.disabled = false;
        $('#loseMessage').html(`You lost the game! The number you were trying to guess was ${randomNumber}`);
        $('#loseAlert').show();
    }
    guessList.textContent = `You guessed: ${userInput.join(", ")}`;
})