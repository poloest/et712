/* 
** Polo L. Estrella
** ET-712
** Assignment 6
** October 18, 2021
*/

// ===================================================
// ======================== A ========================
// ===================================================

const calcAverage = (score1, score2, score3) => {return (score1 + score2 + score3)/3}

function checkWinner(avgNets, avgKnicks){
    if(avgNets > (avgKnicks*2)){
        console.log(`Nets win (BKN: ${avgNets} vs NY: ${avgKnicks})`);
    }
    else if(avgKnicks > (avgNets*2)){
        console.log(`Knicks win (NY: ${avgKnicks} vs BKN: ${avgNets})`);
    }
    else{
        console.log(`No team wins. (NY: ${avgKnicks} vs BKN: ${avgNets})`);
    }
}

// VERSION 1
checkWinner(calcAverage(44,23,71), calcAverage(65,54,49));
checkWinner(calcAverage(85,54,41), calcAverage(23,34,27));

// VERSION 2
// let netsScore1 = Number(prompt("Enter Nets 1st score:"));
// let netsScore2 = Number(prompt("Enter Nets 2nd score:"));
// let netsScore3 = Number(prompt("Enter Nets 3rd score:"));
// let knicksScore1 = Number(prompt("Enter Knicks 1st score:"));
// let knicksScore2 = Number(prompt("Enter Knicks 2nd score:"));
// let knicksScore3 = Number(prompt("Enter Knicks 3rd score:"));
//
// checkWinner(calcAverage(netsScore1,netsScore2,netsScore3), calcAverage(knicksScore1,knicksScore2,knicksScore3));

// ===================================================
// ======================== B ========================
// ===================================================

let lucasHeight = 1.69;
let lucasWeight = 78;

let johnHeight = 1.95;
let johnWeight = 92;

function calculateBMI(height, weight){
    let bmi = weight / (height ** 2);
    
    return bmi;
}

function compareBMI(lucasHT, lucasWT, johnHT, johnWT){
    lucasBMI = calculateBMI(lucasHT, lucasWT).toFixed(2);
    johnBMI = calculateBMI(johnHT, johnWT).toFixed(2);

    let lucasHigherBMI = lucasBMI > johnBMI;

    if(lucasBMI > johnBMI){
        let result = `Lucas' BMI ${lucasBMI} is higher than John's BMI ${johnBMI}!`;
        console.log(result);
    }
    else{
        let result = `John's BMI ${johnBMI} is higher than Lucas' BMI ${lucasBMI}!`;
        console.log(result);
    }
}

compareBMI(lucasHeight, lucasWeight, johnHeight, johnWeight);

// ===================================================
// ======================== C ========================
// ===================================================

const lucasInfo = ["Lucas", 1.69, 78];
const johnInfo = ["John", 1.95, 92];

function compareBMI2(person1, person2){
    person1BMI = calculateBMI(person1[1], person1[2]).toFixed(2);
    person2BMI = calculateBMI(person2[1], person2[2]).toFixed(2);

    let person1Higher = person1BMI > person2BMI;

    if(person1Higher){
        let result = `${person1[0]}'s BMI ${person1BMI} is higher than ${person2[0]}'s BMI ${person2BMI}!`;
        console.log(result);
    }
    else{
        let result = `${person2[0]} BMI ${person2BMI} is higher than ${person1[0]}'s BMI ${person1BMI}!`;
        console.log(result);
    }
}

compareBMI2(lucasInfo, johnInfo);