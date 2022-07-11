const determiner = -12;
let x = "";

if (determiner < 0) {
  x = "Less than 0";
} else {
  x = "Greater or equal to 0";
}

// console.log(x);

//      2

let updater = "";
if (determiner >= 0) {
  updater = "Greater or equal to 0";
  message = 34;
  console.log(message);
} else {
  updater = "Less than 0";
}

console.log(updater);

// message is undefined

// I would use ternary when potentially there are only two outcome and there is no variable to substitute
