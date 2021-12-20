/* 
** Polo L. Estrella
** ET-712
** Assignment 9
** November 24, 2021
*/

// ===================================================
// ======================== A ========================
// ===================================================

const userInput = document.getElementById('userInput');
const image = document.getElementById('image');
const msg = document.getElementById('message');
const checkButton = document.getElementById('checkButton');
const secretNum = document.getElementById('secretNumber');

let secretNumber = Math.floor(Math.random() * 100) + 1;

secretNum.textContent = `The secret number is ${secretNumber}`;
secretNum.style.display = "none";

console.log(secretNumber);

checkButton.addEventListener('click', function(){
    let guess = userInput.value;
    if(isNaN(guess) || guess.length == 0 || !Number.isInteger(Number(guess)) || guess > 100 || guess < 1){
        msg.textContent = "No input or invalid value!";
        image.src = "wrong.png";
    }
    else if(guess > secretNumber){
        msg.textContent = "Too high!";
        image.src = "high.jpg";
    }
    else if(guess < secretNumber){
        msg.textContent = "Too low!";
        image.src = "low.png";
    }
    else{
        msg.textContent = "You win!";
        image.src = "win.png";
        checkButton.disabled = true;
        userInput.disabled = true;
        secretNum.style.display = "block";
        document.body.style.background = "lightgreen";
    }
})

// ===================================================
// ======================== B ========================
// ===================================================

const rabbitBtn = document.getElementById('rabbitBtn');
const catBtn = document.getElementById('catBtn');
const dogBtn = document.getElementById('dogBtn');
const petInfo = document.getElementById('petInfo');
const petImage = document.getElementById('petImage');

class Pet{
    constructor(name, age, gender, species){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.species = species;
    }
    
    showMsg(){
        if(this.gender == 'female')
            petInfo.textContent = `${this.name} is a ${this.species}, and she is ${this.age} years old now.`;
        else
            petInfo.textContent = `${this.name} is a ${this.species}, and he is ${this.age} years old now.`;
    }
    showImg(){
        switch(this.species){
            case "rabbit":
                petImage.src = "rabbit.png"; break;
            case "cat":
                petImage.src = "cat.png"; break;
            case "dog": 
                petImage.src = "dog.png"; break;
        }
    }
}

const rabbit = new Pet("Bugs", 2, "male", "rabbit");
const dog = new Pet("Bella", 5, "female", "dog");
const cat = new Pet("Five", 2, "male", "cat");

rabbitBtn.addEventListener('click', function(){
    rabbit.showImg();
    rabbit.showMsg();
});

catBtn.addEventListener('click', function(){
    cat.showImg();
    cat.showMsg();
});

dogBtn.addEventListener('click', function(){
    dog.showImg();
    dog.showMsg();
});

