function sum(a,b){
    return a+b;
}


function substract(firstValue,b){
    if(b > firstValue){
        return b -firstValue
    }
    return firstValue - b;
}


function divide(a,b){
    return a/b;
}


function takeTest(){
    var question1 = parseInt(prompt("Do you like apple ?"))
    var question2 = parseInt(prompt("Do you like fruits ?"))
    console.log("Apple :",question1)
    console.log("Fruits :",question2)

    
    console.log("The division is ",divide(question1,question2))
    console.log(substract(question1,question2))
    console.log(sum(question1,question2))

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


