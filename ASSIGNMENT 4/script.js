// Polo L. Estrella
// Assignment 4
// September 26, 2021

// ------------------------ QUESTION A ------------------------

function fToC(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    var message = `"It’s getting colder! Let’s cover the temperature here, ${fahrenheit.toFixed(2)} °F is ${celsius.toFixed(2)}} °C`;
    console.log(message);
}

function cToF(celsius) {
    var fahrenheit = (celsius * (9 / 5)) + 32;
    var message = `"It’s getting colder! Let’s cover the temperature here, ${celsius.toFixed(2)}} °C is ${fahrenheit.toFixed(2)} °F`;
    console.log(message);
}

fToC(32);
fToC(0);
fToC(90);

cToF(0);
cToF(-17);
cToF(32);

// ------------------------ QUESTION B ------------------------

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
        let result = `John's BMI ${johnBMI} is higher than Lucas' BMI ${lucasBMI.toFixed(2)}!`;
        console.log(result);
    }
    
}

compareBMI(lucasHeight, lucasWeight, johnHeight, johnWeight);