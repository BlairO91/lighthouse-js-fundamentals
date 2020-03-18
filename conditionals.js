const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");


// Logical Operators
// && - logical AND

const isCitizen = true;
const age = 28;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.")
}

// || - logical OR

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea...");
} else {
  console.log('Have a good time outside!');
}

// ! - logical NOT

let raining = false;

if (!raining) {
  console.log("Leave your umbrella at home!");
}
