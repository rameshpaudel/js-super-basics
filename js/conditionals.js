// Asking user for the value
var firstString = prompt("Enter a number")
var secondString = prompt("Enter another number")

// console.log("The type of variable before the conversion " , typeof firstString)

// Conversion of string to number
var firstNum = parseInt(firstString)
var secondNum = parseInt(secondString)

// console.log("The type of variable after the conversion ", typeof firstNum)

//isNaN is used to check weather the value is in fact a number
// isNaN -> true ==> Not a number 
// isNaN -> false ==> Is a number 


if(isNaN(firstNum) || isNaN(secondNum)  ){
    //The user input a NaN value
    console.error("Both input has to be a number ")
} else {
    //We check the numbers here
    if(firstNum > secondNum){
        console.log("The first num is greater with the value of ", firstNum)
    } else{
        console.log("The second num is greater with the value of ", secondNum)
    }

}