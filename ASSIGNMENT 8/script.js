/* 
** Polo L. Estrella
** ET-712
** Assignment 8
** November 10, 2021
*/

// ===================================================
// ======================== A ========================
// ===================================================

const baseArray = [];
const newArray = [];
let num;

for(let i = 1; i < 12; i++){
    num = 2 ** i;

    if(i % 2 != 0)
        baseArray.push(num);
}

for(let i = baseArray.length - 1; i >= 0; i--){
    if(i != baseArray.length -1 && i != 0)
        newArray.push(baseArray[i]);
}

console.log(baseArray)
console.log(newArray);

// ===================================================
// ======================== B ========================
// ===================================================

const bills = [24, 36, 204, 80, 182, 440, 100, 10, 1008, 48];
const tips = [];
const totals = [];

function calcTipsAndTotal(values, tips, totals){
    let tip, totalAmount;

    for(let i = 0; i < values.length; i++){
        tip = (values[i] * .15);
        totalAmount = (tip + values[i]);

        tips.push(tip.toFixed(2));
        totals.push(totalAmount.toFixed(2));
    }

    console.log(`Bills: ${values}`);
    console.log(`Tips: ${tips}`);
    console.log(`Total Amount: ${totals}`);
}

calcTipsAndTotal(bills, tips, totals);

// ====================== BONUS ======================

function calcAverage(values){
    let sum = 0;
    for(let i = 0; i < values.length; i++){
        sum = sum + values[i];
    }
    return sum / values.length;
}
console.log(`Average of bills: ${calcAverage(bills)}`);

// ===================================================
// ======================== C ========================
// ===================================================

const modal = document.querySelector('.modal');
const btns = document.querySelectorAll('.btn');
const closeModal = document.querySelector('.closeButton');

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
        modal.style.display = "block";
    })
}

closeModal.addEventListener('click', function(){
    modal.style.display = "none";
})

window.addEventListener('click', function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
})