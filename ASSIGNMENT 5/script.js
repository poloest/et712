/* 
** Polo L. Estrella
** ET-712
** Assignment 5
** October 4, 2021
*/

// ======================== A ========================

function calculateAve(score1, score2, score3){
    let ave = (score1 + score2 + score3)/3;
    return ave.toFixed(2);
}

function game(netsScore, knicksScore){
    if(netsScore < 100 && knicksScore < 100){
        console.log("No team wins, minimum score of 100 required!");
    }
    else if(netsScore == knicksScore){
        console.log("It's a draw!");
    }
    else if(netsScore > knicksScore){
        console.log(`Nets win! Their score: ${netsScore}`);
    }
    else if(knicksScore > netsScore){
        console.log(`Knicks win! Their score: ${knicksScore}`);
    }
}

// Test Case 1
let aveScoreNets = calculateAve(96, 108, 89);
let aveScoreKnicks = calculateAve(88, 91, 110);

// Test Case 2
// let aveScoreNets = calculateAve(97, 112, 101);
// let aveScoreKnicks = calculateAve(109, 95, 123);

// Test Case 3 
// let aveScoreNets = calculateAve(97, 112, 101);
// let aveScoreKnicks = calculateAve(109, 95, 106);

game(aveScoreNets, aveScoreKnicks);

// ======================== B ========================

function calculateTip(amount){
    let tip, totalAmount;

    switch(true){
        case (amount >= 30 && amount <= 300): 
            tip = (amount * .15);
            totalAmount = tip + amount;
            break;
        case (amount < 30 || amount > 300):
            tip = (amount * .20);
            totalAmount = (amount + tip);
            break;
    }
    console.log(`The bill was ${amount}, the tip was ${tip.toFixed(2)}, and the total value is ${totalAmount}`);
}

calculateTip(275);
//calculateTip(28);
//calculateTip(430);

// ======================== C ========================

function celsiusToFahrenheit(celsius){
    let fahrenheit = (celsius * (9 / 5)) + 32;
    console.log(`${celsius.toFixed(2)}°C  is ${fahrenheit.toFixed(2)}°F`);
}

function fahrenheitToCelsius(fahrenheit){
    let celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`${fahrenheit.toFixed(2)}°F is ${celsius.toFixed(2)}°C`);
}

celsiusToFahrenheit(0);
// celsiusToFahrenheit(-17);
fahrenheitToCelsius(32);
// fahrenheitToCelsius(0);
