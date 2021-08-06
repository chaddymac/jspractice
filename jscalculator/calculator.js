// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.

// BONUS: Make a program that can subtract, multiply, and also divide!

var a = prompt("Enter a number", "0");
var b = prompt("Enter a second number", "0");

var num1 = parseInt(a);
var num2 = parseInt(b);

var numadd = num1 + num2;
var numdivide = num1 / num2;
var numsubtract = num1 - num2;
var nummultiply = num1 * num2;

alert(String(numadd));
