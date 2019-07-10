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


for (var i = 0; i < 100; i += 2) {
    console.log(i)
}


var i = 0;
while (i < 100) {
    console.log(i)
    i += 2;
}
