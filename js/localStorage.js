//TO set an item into localStorage

localStorage.setItem('test-1', 'The value');
localStorage.setItem('test-2', 'The 2value');
localStorage.setItem('test-3', 'The 3value');
localStorage.setItem('test-4', 'The 4value');
localStorage.setItem('test-5', 'The 5value');
localStorage.setItem('test-6', 'The 6value');

localStorage.removeItem('key');
localStorage.removeItem('test');

setTimeout(()=>{
    // localStorage.clear();
},2000);

//Generating all Keys

for(var i = 0; i < localStorage.length; i++){
    console.log(localStorage.key(i))
}


var obj = {
    firstName: 'John',
    lastName: 'Doe'
}

//Converting arrays/objects to string format
var convertedObj = JSON.stringify(obj)
localStorage.setItem('person', convertedObj)


var personFromLS = localStorage.getItem('person')

//Parsing string into arrays/objects format
var convPerson = JSON.parse(personFromLS)


var outputData = `
<h1>JavaScript LocalStorage Basics</h1>

    <p>HTML Data  </p>
`

localStorage.setItem('output', outputData)


window.addEventListener('load', function(){
    // alert('loaded')
})
// window.onload = function(){
//     console.log('loaded')
// }