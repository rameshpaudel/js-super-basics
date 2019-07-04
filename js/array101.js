/* 
var arr = [1, 2, 3, 4, 5, 6, "Test", "Another", "Super"];

console.log("The first item in the array is ",arr[0])
console.log("The second item in the array is ",arr[1])
console.log("Last item ", arr[arr.length -1 ])
console.log("The full size of the array is ", arr.length)

// Looping all items from an array
for(var i = 0; i < arr.length; i++){
    console.log("Index: ", i," Value: ", arr[i])
}


var newArr = [];
//Adding items to the end of the array
newArr.push(1);
newArr.push("Hello");
newArr.push("World");
newArr.push("Test");


//Adding items to the begining of the array
newArr.unshift("Ram")



//Removing items from the array


//Removing the last item from the array
newArr.pop();

//Removing the first item from the array
newArr.shift();

*/

//Removing multiple items
var numCollection = [];

for (var i = 1; i <= 1000; i++) {
    numCollection.push(i)
}

//How many items we want to remove from the array
var itemsToRemove = 5;

//Total number of items in the array
var totalNoOfItems = numCollection.length;

//Determining the start position of the array
var indexPosition = totalNoOfItems - itemsToRemove;


//To remove multiple items from the array
numCollection.splice(indexPosition, itemsToRemove);