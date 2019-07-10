//Variable
var test = 1235
var test = "              1235 Hello World                "

let temp = "12345"
const theConst = "Any value"


//Basic string functions
console.log(test)
//To count the length of characters
console.log(test.length)

console.log(test.trim())


console.warn("THis outputs a warning")
console.error("THis outputs an error message")



var testArr = [
    "Test", "Another", "Random", 4, 5, 6
];

//TO check the data type => typeof 

console.log('type', testArr.length, typeof testArr)

//These two are same
//i = i+ 2
// i += 2


// for (var i = 0; i < 100; i += 2) {
//     console.log(i)
// }


// var i = 0;
// while (i < 100) {
//     console.log(i)
//     i += 2;
// }


// Ask 2 questions
// SHow which number was greater
// parseInt() -> string to number
var question1 = prompt("Enter a number")
var question2 = prompt("Enter anotheer number")


console.log(typeof question1, typeof question2)

var firstQuestion = parseInt(question1)
var secondQuestion = parseInt(question2)

// console.log(typeof firstQuestion, typeof secondQuestion)

console.log("The sum of the inputs is" ,firstQuestion + secondQuestion)

if(firstQuestion > secondQuestion){
    console.log("The first question has greater value which is",firstQuestion)
} else if(firstQuestion == secondQuestion){
    console.log("Both of the values are equal")
} else{
    console.log("The second question has greater value which is", secondQuestion)
}