// 1. alert in Javascript
// alert('I am learning Javascript')
// alert('3...')
// alert('2...')
// alert('1...')
// console.log('I learned some JS')

//2. declaring variables in javascript (var, let, const)
// var message = "Hello!"
// console.log(message)

// message = 'Goodbye!'
// console.log(message)

// const mycontent = "Hello Students"
// console.log(mycontent)

/*not possible to changes 'const' variable
// mycontent = "Goodbye Students"  // displays error!
// console.log(mycontent) // displays error!*/


//3. another example of declaring variables
// score = 70
// bonuspoint = 10

// finalscore = score + bonuspoint
// console.log(finalscore)

//4. another example of declaring variables
// jhon_score = 70;
// alice_score = 80;
// bonuspoint = 10;

// jhon_finalscore = jhon_score + bonuspoint;
// alice_finalscore = alice_score + bonuspoint;
// console.log(jhon_finalscore);
// console.log(alice_finalscore);

//5. another example
// student_1 = "George";
// student_2 = "Mary";

// all_students = student_1 + student_2; // without division
// console.log(all_students);

// all_students = student_1 + " " + student_2; // with division
// console.log(all_students);

/*NOTES:
Javascript is case sensitive
*/

//6. mathematical operands
/*a = 100;
b = 30;

console.log("a = " + a);
console.log("b = " + b);

//addtion
addition = a + b;
console.group("Addition: " + addition);   // ',' also works
//console.group() also works for grouping in the messages in console

//substraction
substraction = a - b;
console.log("Substraction: " + substraction);

//multiplication
multiply = a * b;
console.log("Multiply: " + multiply);

//division
division = a / b;
console.log("Division: " + division);

//modulus
modulus = a % b;
console.log("Remainder of division (Modulus): " + modulus);

//7. strings, 3 ways to define a string
singleQuoteString = "Hello World Single quote ''";
console.group(singleQuoteString); //console.group() also works for grouping in the messages in console

doubleQuoteString = 'Hello World Double quotes " "';
console.log(doubleQuoteString);

templateLiteralString = "Hello World back ticks ``"; //back tick ``
console.log(templateLiteralString);*/

//8. concatenating strings
/*firstName = "Jhon";
lastName = "Smith";

fullName = firstName + lastName; //no spaces
console.log("full Name without space: " + fullName);

fullName = firstName + " " + lastName; // with space
console.log("full Name with space: " + fullName);

fullNameTL = `Full Name: ${firstName} ${lastName} is  a crazy person`; //with back tick
console.log(fullNameTL);*/

//9. prompt
/*clientName = prompt("enter your name: ");
message = "Hello, " + clientName + ", welcome to my site!";
console.log(message);

age = prompt("enter your Age: ");
message2 = "string concatenated: " + (age + 19); //string concatenating
console.log(message2);
message2 =
  "Your age is: " +
  age +
  " and Your mothers Age must be greather than: " +
  (Number(age) + 19); //parse to a number
console.log(message2);

document.write(message2); //displays in the document

alert(message2); //it displays as a alert*/

// 10. Prompt the user for their name
/*let clientName = prompt("Enter your name:");
let message = "Hello, " + clientName + ", welcome to my site!";
console.log(message);

// Prompt the user for their age
let age = prompt("Enter your age:");
let message2 = "Hello " + clientName + ", your age is: " + age;
console.log(message2);
document.write(message2);

// Update the <h1> element on the webpage with the message containing the age
document.querySelector("h1").innerHTML = message2;

//11. Functions onclick event change style color
function changeColor() {
  document.querySelector("h1").style.color = "red";
  document.querySelector("th").style.backgroundColor = "yellow";
}*/

//12. Coditionals
/*correctGuess = true;

age = prompt("Enter your age: ");

console.log(age > 65); //display boolean value

if (age > 65) {
  console.log("Hello Senior!");
} else {
  console.log("Hello Young!");
}*/

//13. Coditionals II
//age greather than 65 is Senior
//between 50 and 65 is mature
//between 20 to 50 young
//less than 20 youth

/*age = prompt("Enter your age: ");
if (age > 65) {
  console.log("Hello Senior!");
  console.log("Your Age is: " + age);
  document.write("Hello Senior!\n");
  document.write("\nYour age is: " + age);
} else if (age == 65) {
  console.log("Welcome to Seniorship!");
  console.log("Your Age is: " + age);
  document.write("Welcome to Seniorship!\n");
  document.write("\nYour age is: " + age);
} else if (age > 50) {
  console.log("Hello Mature!");
  console.log("Your Age is: " + age);
  document.write("Hello Mature!\n");
  document.write("\nYour age is: " + age);
} else if (age > 20) {
  console.log("Hello Young!");
  console.log("Your Age is: " + age);
  document.write("Hello Young!\n");
  document.write("\nYour age is: " + age);
} else {
  console.log("Hello Teenager!");
  console.log("Your Age is: " + age);
  document.write("Hello Youth!\n");
  document.write("\nYour age is: " + age);
}*/

