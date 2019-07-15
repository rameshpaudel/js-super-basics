//Multidimensional Arrays

var multi=  [
    ["Harry", "John", "Joe"],
    ["Student", "Doctor", "Teacher"],
    [10,20,30],
    ["Kathmandu", "Pokhara", "Bhaktapur"]
];

for(var i = 0; i < multi.length; i++){
    //The current item
    // console.log(multi[i])
    // console.log(i)

    //The current item returns array on to which we run the loop
    for(var a = 0; a < multi[i].length; a ++){
        
      console.log(multi[i][a]) 
    }
}



var tArray = [1,2,3,4,5,6,7,8,9,10];

function checkNumber(value){
    if(value > 4 && value < 9){
        return true;
    }
    return false
}

var filteredData = tArray.filter(checkNumber)
