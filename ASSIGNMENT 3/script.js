function fToC(fahrenheit) {
    var temp = fahrenheit;
    var celsius = (temp - 32) * 5 / 9;
    var message = temp + '°F is ' + celsius + '°C.'
    console.log(message);
}

function printInfo(name, year, height) {
    console.log(name + " was born on " + year + " and " + name + " is " + height + " feet tall.")
}

fToC(32);
fToC(0);
fToC(90);

printInfo("John", 1996, 6);
printInfo("Mark", 1992, 5.6);
printInfo("Lucas", 1976, 6.4);

var name = prompt("Please enter your name: ");

function replaceText() {
    var text = document.getElementById("Title");

    if (name != null && name != "") {
        text.innerHTML = "<h1>" + name + "</h1>";
    }
    else {
        text.innerHTML = "<h1>" + "Assignment 3" + "</h1>";
    }
}

replaceText();

let ageJohn = "";
console.log(typeof ageJohn);

const resultC = 2 * 10 + "Mark" + 100 / 2;
console.log(typeof resultC);
console.log(resultC);

let y;

console.log(typeof y);
