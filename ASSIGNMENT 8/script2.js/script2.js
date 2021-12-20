

// accept the int 
// check if it is within the range given 
// the closest multiple of ten to N would be returned


// accept the integer
// check if its within the range given
// generate a number between n and 999,999,999 - while loop
// check if the number ends with zero

// test cases
// under the range
// over the range
// number applicable to the range


function returnClosest(n){
    if(n > 0 && n < 999,999,999){
        for(let i = 0; i <= 10; i++){
            n = n + 1;
                if(n % 10 == 0){
                    return n;
                }
        }
    }
    else
        return false;
}

function returnRandomArbitrary(n){
    let randomNum = Math.floor(Math.random() * Math.floor(n));
    console.log(randomNum);
    while(true){
        if(randomNum > n){
            break;
        }
        randomNum = Math.floor(Math.random());
        console.log(randomNum);
    }
    return randomNum;
}

console.log("hello");

console.log(returnRandomArbitrary(34));

// console.log(returnClosest(34));

// console.log(returnClosest(-1));

// console.log(returnClosest(0));


// create counter - the highest occurance
// create counter - current occurance
// create var to store the letter which occurs most often

// Assume that:
// •    The length of the string S is within the range [2..27];
// •    String S consists only of lowercase letters;
// •    All letters in S are distinct except one, which occurs twice.

// test cases 
// normal string
// string with more than 2 
// string with all distinct letters
// string with numbers

// let current = 0; // current occurance counter

// function returnOccursTwice(stringOfLetters){
//     arrayOfChar[] = stringOfLetters.parse()

//     for(let i = 0; i < arrayOfChar.length; i++){
//         for(let j = 0; j < arrayOfChar.length; j++){
//             if(arrayOfChar[i] == arrayOfChar[j]){
//                 current++;
//             }
//         }
//         if(current >= 2){
//             return arrayOfChar[i];
//         }
//         current = 0;
        
//     }
// }

const string = "word"

string.split('');

Array.from(string);

console.log()

// console.log(returnOccursTwice("abcdea"));



// find_min(array A) {
//     answer = 0 // should be first element as a checker
//     I = 1
//      while (i< A.length) {
//           if (answer > A[i]) {
//               answer = A[i]
//           }
//            i = i+ 1
//        }
//     return answer
//    }