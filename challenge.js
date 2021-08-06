// Take two numbers from a user and perform a math quiz.
// Expected input/output below
// Enter number 1: 6
// Enter number 2: 2
// 6 + 2 = 8
// 6 - 2 = 4
// 6 * 2 = 12
// 6 / 2 = 3
const prompt = require("prompt-sync")();
var a = prompt("Enter a number: ");
var b = prompt("Enter a second number: ");

var num1 = parseInt(a);
var num2 = parseInt(b);
var add = num1 + num2;
var sub = num1 - num2;
var div = num1 / num2;
var mul = num1 * num2;
console.log(`${num1} + ${num2} = ${add}`);
console.log(`${num1} - ${num2} = ${sub}`);
console.log(`${num1} / ${num2} = ${div}`);
console.log(`${num1} * ${num2} = ${mul}`);
