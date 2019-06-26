//3 level of log message


//1 -> Informative message
//2 -> Warning message
//3 -> Error message

//Variable
var someNumber = 10;

var someText = "Hello World";

console.log(someNumber);

console.log(someText);


console.log(10);

console.log(20);

console.log("This is a string that will show up in the console");


console.warn("This will show warning message")

console.error("This will show error message")

console.log(1 + 2);

console.log(18 / 2);
console.log(16 - 2 - 2 - 2);
console.log(9 * 5);

//Remainder
console.log("Remainder is calculated by % symbol ", 11 % 5);


var math = 90;
var science = 30;
var english = 50;

var totalObtainedMarks = math + science + english;
var totalMarks = 300;

console.log(totalObtainedMarks / totalMarks * 100)

// =================================================================



var firstName = "Ram"
var middleName = "Bdr"
var lastName = "Doe";

var fullName = firstName + " " + middleName + " " + lastName


//To check the length of characters use .length in string

console.log("The total caracter count is ",fullName.length);


//Conversion of string to capital letters
console.log("Name in all caps ",fullName.toUpperCase());

//Conversion of string to small letters
console.log("Name in all small ",fullName.toLowerCase());


//Alert ==> Halting and showing information

// alert("Hello World")


// Prompt asks user for question 
// The result will be saved in the variable
var question = prompt("Enter your name ");

console.log(question)

// alert(question)