/* 
** Polo L. Estrella
** ET-712
** Assignment 7
** October 26, 2021
*/

// ===================================================
// ======================== A ========================
// ===================================================


const JohnObject = {
    firstName: 'John',
    birthYear: 1950,
    // birthYear: 1992,
    // birthYear: 2015,
    height: 1.95,
    weight: 92,
    gender: 'Male',
    job: 'Software Engineer',
    address: "66 Perry Street, West Village",
    email: "john@gmail.com",

    calcRetirementYear: function(){
        this.age = 2021 - this.birthYear ;
        this.yearsLeft = 65 - this.age;

        if(this.age < 16){
            return `${this.firstName} is less than 16 years old.`;
        }
        else if(this.yearsLeft > 0){
            return `${this.firstName} will retire in ${this.yearsLeft} years.`;
        }
        
        else{
            return `${this.firstName} is already retired for ${this.yearsLeft*-1} years.`;
        }
    }
}

console.log(JohnObject.calcRetirementYear());

// ===================================================
// ======================== B ========================
// ===================================================

function convertCelsiusToFahrenheit(){
    const celsiusTemp = [];
    const fahrenheitTemp = [];
    for(let i = 0; i < 4; i++){
        let tempInput = Number(prompt(`Enter celsius temperature number ${i+1}:`));
        celsiusTemp.push(tempInput);
    }
    for(let i = 0; i < 4; i++){
        let fahrenheit = (celsiusTemp[i] * (9 / 5)) + 32;
        fahrenheitTemp.push(fahrenheit);
    }

    return `We have converted the temperatures ${celsiusTemp[0]}°C, ${celsiusTemp[1]}°C, ${celsiusTemp[2]}°C, ${celsiusTemp[3]}°C to Fahrenheit upon your request, they are ${fahrenheitTemp[0]}°F, ${fahrenheitTemp[1]}°F, ${fahrenheitTemp[2]}°F, ${fahrenheitTemp[3]}°F.`;
}

console.log(convertCelsiusToFahrenheit());

// ===================================================
// ======================== C ========================
// ===================================================

const Mark = {
    firstName: 'Mark',
    height: 1.9,
    weight: 60
}

const John = {
    firstName: 'John',
    height: 1.95,
    weight: 92
}

const Lucas = {
    firstName: 'Lucas',
    height: 1.69,
    weight: 78
}

function checkBMI(person){
    let bmi = (person.weight / (person.height ** 2)).toFixed(2);
    
    if(bmi < 18.5){
        console.log(`${person.firstName}'s BMI is ${bmi}, he is underweight.`);
    }
    else if(bmi >= 18.5 && bmi <= 25){
        console.log(`${person.firstName}'s BMI is ${bmi}, he has an ideal weight.`);
    }
    else if(bmi > 25 && bmi <= 30){
        console.log(`${person.firstName}'s BMI is ${bmi}, he is overweight.`);
    }
    else{
        console.log(`${person.firstName}'s BMI is ${bmi}, he is obese.`);
    }
}

checkBMI(Lucas);
checkBMI(Mark);
checkBMI(John);