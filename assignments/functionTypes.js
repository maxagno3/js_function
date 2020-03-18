// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
//Function Decleration
function addNumber(n){
  return n + 1;
}
console.log(addNumber);

// Function Expression
let addNumber = function(n){
  return n + 1;
}

// Arrow Function
let addNumber = (n) => (n + 1);

// Arrow Function With Curly Bracket
let addNumber = (n) => {
  return n + 1;
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
//Function Decleration
function fromGivenNumber (n){
  return (n-1);
}

// Function Expression
let fromGivenNumber = function(n){
  return (n-1);
}

// Arrow Function
let addNumber = (n) => (n-1);

// Arrow Function With Curly Bracket
let addNumber = (n) => {
  return (n-1);
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
//Function Decleration
function addTwoNum (x,y){
  return x + y;
}

// Function Expression
let addTwoNum = function (x,y){
  return x + y;
}

// Arrow Function
let addTwoNum = (x,y) => x+y;

// Arrow Function With Curly Bracket
let addTwoNum = (x,y) => {
  return x+y;
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
//Function Decleration
function substractNum(x,y){
  return (x - y);
}

// Function Expression
let substractNum = function (x,y){
  return (x - y);
}

// Arrow Function
let substractNum = (x,y) => (x-y);

// Arrow Function With Curly Bracket
let substractNum = (x,y) => {
  return (x-y)
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
//Function Decleration
function multiplyTwoNumbers (x,y){
  return (x * y);
}

// Function Expression
let multiplyTwoNumbers = function (x,y){
  return (x * y);
}

// Arrow Function
let multiplyTwoNumbers = (x,y) => (x * y);

// Arrow Function With Curly Bracket
let multiplyTwoNumbers = (x,y) => {
  return (x * y);
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
//Function Decleration
function division (x,y){
  return (x/y);
}

// Function Expression
let division = function (x,y){
  return (x/y);
}

// Arrow Function
let division = (x,y) => x/y;

// Arrow Function With Curly Bracket
let division = (x,y) => {
  return (x/y);
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
//Function Decleration
function multiplyItself(x){
  return (x *= x);
}

// Function Expression
let multiplyItself = function(x){
  return (x *= x)
}

// Arrow Function
let multiplyItself = (x) => (x*=x);

// Arrow Function With Curly Bracket
let multiplyItself = (x) => {
  return (x*=x);
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
//Function Decleration
function mathsOperation (x,y){
  return (x+y);
}

// Function Expression
let mathsOperation = function(x,y){
  return (x-y);
}

// Arrow Function
let mathsOperation = (x,y) => (x * y);

// Arrow Function With Curly Bracket
let mathsOperation = (x,y) => {
  return (x / y);
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
//Function Decleration
function ifGreater (a,b){
  return (a > b) ? true : false;
}

// Function Expression
let ifGreater = function (a,b) {
  return (a > b) ? true : false;
}

// Arrow Function
let ifGreater = (a,b) => (a > b) ? true : false;

// Arrow Function With Curly Bracket
let ifGreater = (a,b) => {
  return (a > b) ? true : false;
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
//Function Decleration
function isLess (a,b){
  return (a < b) ? true : false;
}

// Function Expression
let isLess = function (a,b){
  return (a < b) ? true : false;
}

// Arrow Function
let isLess = (a,b) => (a < b) ? true : false;

// Arrow Function With Curly Bracket
let isLess = (a,b) => {
  return (a < b) ? true : false;
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
//Function Decleration
function ifEqual (a,b){
  return (a == b) ? true : false;
}

// Function Expression
let ifEqual = function (a,b) {
  return (a == b) ? true : false;
}

// Arrow Function
let ifEqual = (a, b) => (a == b) ? true : false;

// Arrow Function With Curly Bracket
let ifEqual = (a,b) => {
  return (a == b) ? true : false;
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
//Function Decleration
function smallNumber (x,y){
  return (x < y) ? `${x} is smaller` : `${y} is smaller`;
}

// Function Expression
let smallNumber = function(x,y){
  return (x < y) ? `${x} is smaller` : `${y} is smaller`;
}

// Arrow Function
let smallNumber = (x, y) => (x < y) ? `${x} is smaller` : `${y} is smaller`;

// Arrow Function With Curly Bracket
let smallNumber = (x,y) => {
  return (x < y) ? `${x} is smaller` : `${y} is smaller`;
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
//Function Decleration
function largeNumber (x,y) {
  return (x < y) ? `${x} is largest` : `${y} is largest`;
}

// Function Expression
let largeNumber = function(x,y){
  return (x < y) ? `${x} is larger` : `${y} is larger`;
}
// Arrow Function
let largeNumber = (x, y) => (x < y) ? `${x} is larger` : `${y} is larger`;

// Arrow Function With Curly Bracket
let largeNumber = (x, y) => {
  return (x < y) ? `${x} is larger` : `${y} is larger`;
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
//Function Decleration
function evenNumber (n) {
  return (n % 2 === 0) ? true : false;
}
// Function Expression
let evenNumber =  function(n) {
  return (n % 2 === 0) ? true : false;
}

// Arrow Function
let evenNumber = (x, y) => (n % 2 === 0) ? true : false;

// Arrow Function With Curly Bracket
let evenNumber = (x,y) => {
  return (n % 2 === 0) ? true : false;
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
//Function Decleration
function oddNumber (n) {
  return (n % 2 === 1) ? true : false;
}

// Function Expression
let oddNumber = function (n){
  return (n % 2 === 1) ? true : false;
}

// Arrow Function
let oddNumber = (n) => (n % 2 === 1) ? true : false;

// Arrow Function With Curly Bracket
let oddNumber = (n) => {
  return (n % 2 === 1) ? true : false;
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
//Function Decleration
function letterGrade (score, total){
  let percent = (score/total) * 100;
  switch(percentGrade){
    case (percent >= 90 || percent <= 90) : console.log('A');
      break;
    case (percent >=89 || percent <= 80) : console.log('B');
      break;
    case (percent >= 79 || percent <= 70): console.log('C');
      break;
    case (percent >= 69 || percent <= 60): console.log('D');
      break;
    case (percent > 0 || percent <= 59): console.log('F');
      break;
  }
}

// Function Expression
let letterGrade = function (score,total){
  let percent = (score / total) * 100;
  switch (percentGrade) {
    case (percent >= 90 || percent <= 90): console.log('A');
      break;
    case (percent >= 89 || percent <= 80): console.log('B');
      break;
    case (percent >= 79 || percent <= 70): console.log('C');
      break;
    case (percent >= 69 || percent <= 60): console.log('D');
      break;
    case (percent > 0 || percent <= 59): console.log('F');
      break;
  }
}

// Arrow Function With Curly Bracket
let letterGrade = (score,total) => {
  let percent = (score / total) * 100;
  switch (percentGrade) {
    case (percent >= 90 || percent <= 90): console.log('A');
      break;
    case (percent >= 89 || percent <= 80): console.log('B');
      break;
    case (percent >= 79 || percent <= 70): console.log('C');
      break;
    case (percent >= 69 || percent <= 60): console.log('D');
      break;
    case (percent > 0 || percent <= 59): console.log('F');
      break;
  }
}

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
//Function Decleration
function joinStrings (word1, word2){
  return (word1 + " " + word2);
}

// Function Expression
let joinStrings = function (word1, word2){
  return (word1 + " " + word2);
}

// Arrow Function
let joinStrings = (word1, word2) =>  (word1 + " " + word2);

// Arrow Function With Curly Bracket
let joinStrings = (word1, word2) => {
  return (word1 + " " + word2);
}