var readlineSync = require('readline-sync');




function showMessage() {

  console.log("A prime number is a whole number greater than 1 whose only factors are 1 and itself.");

  console.log("lets check if your birthday is a prime number or not")
  
var userAns = readlineSync.question("may i know your name ?");
console.log("welcome " + userAns);

console.log(" ");

  var userAnswer = readlineSync.question("enter your birth date and month DDMM :\n");
  
  console.log(" ");

  if (userAnswer == "") {
    console.log("please enter a number first....")
  }
  else {
    primeNumber(userAnswer);
  }
}


function primeNumber(userAnswer) {

  var fact = 1;
  for (let i = 2; i < userAnswer; i++) {
    if (userAnswer % i == 0) {
      fact++;

    }

  }
  if (fact == 1) {
    console.log("its a prime number.")
  }
  else {
    console.log("this is not a prime number.")
  }

}

showMessage();