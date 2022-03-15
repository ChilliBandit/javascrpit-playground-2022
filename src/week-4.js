// TODO
/*
JavaScript Variables
*/
var fullName = "Phoenix Binnie-Genet"
var classCode = 503

console.log(fullName)
console.log(classCode)

// JavaScript Objects 

var full_name = 
{
first_name: "Phoenix",
last_name: "Binnie-Genet",
course_number: 503
}

console.log(full_name)
console.log(full_name.first_name)
console.log(full_name["last_name"])

// Javascript Functions
function addTwoNumbers(num1, num2) {
    return num1+num2
}
console.log(addTwoNumbers(12,3))

function addThreeNumbers(num1, num2, num3) {
    return num1+num2+num3
}
console.log(addThreeNumbers(69,420,1337))

// JavaScrpit Loops 

for(var i=0; i< 10; i++){
    console.log(i)
}
//JavaScript if statements
var number = 9
if (number === 10) {
    console.log("answer = " + number)
} else {
    console.log("error")
}