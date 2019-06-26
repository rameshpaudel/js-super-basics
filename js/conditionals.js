var firstNum = 50;
var secondNum = 20;

// console.log(firstNum > secondNum);
/*
*This is a multiline comment
*/

//This is a single line comment
if( firstNum > secondNum ){
    console.log("The first number is greater")
}




// Asking user for the value
var firstString = prompt("Enter a number")
var secondString = prompt("Enter another number")

console.log("The type of variable before the conversion " , typeof firstString)

// Conversion of string to number
var firstNum = parseInt(firstString)
var secondNum = parseInt(secondString)

console.log("The type of variable after the conversion ", typeof firstNum)


if(firstNum > secondNum){
    console.log("The first num is greater with the value of ", firstNum)
} else{
    console.log("The second num is greater with the value of ", secondNum)
}


