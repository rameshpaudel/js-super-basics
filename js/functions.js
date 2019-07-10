function sum(a,b){
    return a+b;
}


function substract(firstValue,b){
    if(b > firstValue){
        return b -firstValue
    }
    return firstValue - b;
}


function takeTest(){
    var question1 = prompt("Do you like apple ?")
    var question2 = prompt("Do you like fruits ?")
    console.log("Apple :",question1)
    console.log("Fruits :",question2)
}

function askUserForInput(){
    var answer = confirm("Hello there do you want to take the quiz?")

    if(answer){
        console.log("Welcome to the quiz")
        takeTest();
    } else{
        alert("Goodbye");
    }
   
}