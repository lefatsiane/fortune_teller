const MomName = prompt("What is your mother's name?"); // useer will be prompted to enter a string data type
console.log(MomName); // console will display what the "MomName" is

const StrName = prompt("Name of street you grew up on?");
console.log(StrName);

const FavColor = prompt("What was your favourite color as a child");
console.log(FavColor);

const age = Number(prompt("How old are you currently?")); // user will be prompted to enter a number value whill be used for calculations
console.log(age);

const num = Number(prompt("Pick a number between 1-10"));
console.log(num);

combined = age + num; //addition of user input age and number they selected
kids = age % num; // use of the modulus arithmetic to predict how many kids the user will have
let dye = age / num; // age divided by user selected number will give us the amount of years the user will devide the time in
Math.round(dye); // round up the number of years it will take to die the users hair

console.log(`You will meet your bestfriend in ${num} years
Their name is ${MomName} ${StrName} and you will get married in ${combined} years then 
you will have ${kids} kids and then you will dye your hair in ${dye} years`); // this the output of the code when user has entered all details
