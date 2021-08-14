// localStorage.setItem('myName', 'Linh')
// localStorage.setItem('petName', 'Yonna')
// localStorage.setItem('petAge', 1)

// localStorage.setItem('petAge',2)
var myName=localStorage.getItem('myName')
var petName= localStorage.getItem('petName')
var petAge= localStorage.getItem('petAge')

var myArray =[1,2,3,4]
var myOject= { name: 'Linh', hasPet: true}

localStorage.setItem(myArray,JSON.stringify(myArray))

console.log(JSON.stringify(myArray))
console.log(JSON.stringify(myOject))