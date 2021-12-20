/* 
** Polo L. Estrella
** ET-712
** Assignment 10
** November 24, 2021
*/

// ===================================================
// ======================== A ========================
// ===================================================

const p1Rolls = [];
const p2Rolls = [];
const p1Msg = document.getElementById('p1Msg');
const p2Msg = document.getElementById('p2Msg');
const p1Start = document.getElementById('select1');
const p2Start = document.getElementById('select2');
const p1Button = document.getElementById('rollButton1');
const p2Button = document.getElementById('rollButton2');
const result = document.getElementById('result');
let randomNumber;

p1Button.disabled = true;
p2Button.disabled = true;

p1Start.addEventListener('click', function(){
    p1Button.disabled = false;
    p1Start.disabled = true;
    p2Start.disabled = true;
    result.textContent = "ROLL THE DICE!"
});

p2Start.addEventListener('click', function(){
    p2Button.disabled = false;
    p1Start.disabled = true;
    p2Start.disabled = true;
    result.textContent = "ROLL THE DICE!"
});

function getSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

p1Button.addEventListener('click', function(){
    randomNumber = Math.floor(Math.random() * 6) + 1;
    p1Rolls.push(randomNumber);
    p1Msg.textContent = `Player 1 rolls: ${p1Rolls}`;
    if(getSum(p1Rolls) >= 16){
        result.textContent = `Player 1 wins with a total of ${getSum(p1Rolls)} points!`;
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
    else{
        p1Button.disabled = true;
        p2Button.disabled = false;
    }
})

p2Button.addEventListener('click', function(){
    randomNumber = Math.floor(Math.random() * 6) + 1;
    p2Rolls.push(randomNumber);
    p2Msg.textContent = `Player 2 rolls: ${p2Rolls}`;
    if(getSum(p2Rolls) >= 16){
        result.textContent = `Player 2 wins with a total of ${getSum(p2Rolls)} points!`;
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
    else{
        p2Button.disabled = true;
        p1Button.disabled = false;
    }
})