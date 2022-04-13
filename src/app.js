function nameOfMonth(num) {​
    let answer = ""
    switch (num) {​
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("June");
            break;
        case 7:
            console.log("July");
            break;
        case 8:
            console.log("August");
            break;
        case 9:
            console.log("September");
            break;
        case 10:
            console.log("October");
            break;
        case 11:
            console.log("November");
            break;
        case 12:
            console.log("December");
            break;
    }​
    return answer;
}​
nameOfMonth(2)

//Write a function that given date mm/dd/yyyy returns it as a weekday 


function getDay(day) {
var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
var date = new Date(day)

return days[date.getDay()]

}


//wire a function that returns true if the lenght of a string is even and false is the string is odd


function isEven(string) {
var len = string.length
return (len/2 == Math.round(len/2))
}

console.log(isEven("home"))

//es6
const isEven = (string) => string.length % 2 == 0


//create a function that takes 2 arguements frist one is and array and the next one is a string
//indexArray(["h", "dhjd", "jsdjhjks"], "dhji") -> 2
function getIndex (array, string) {
    return array.indexOf(string)
}

console.log(getIndex(["Q", "W", "R"], "W"))

//es6

const getindex = (array, string) => array.findIndex(val => val === string)

//create a function that returns the total of all odd numbers
//up to and including the number pass in as param
//example: oddNumberSum(5) -> 9 [1+3+5]
//example: oddNumberSum(13) -> 49 [1+3+5+7+9+11+13]

function oddNumberSum(num) {
let total = 0
for (let i = 1; i <= num; i+2) {
total += i // total = total + i
}
return total
}

//create function that takes an array of strings and numbers and filter out the arrary so it 
//returns only the array of numbers.
//example onlyNumber(["ksjdk", "90", "jskdjdk", "97"]) -> [90, 97]

function onlyNumber(arr) {
    return arr.filter(val => Number.isInteger(val))
}

//Create a function that a number as an argument, increment the number by 1 and return the result
//addByOne(-2)
function addByOne(num) {
    return num + 1 // ++num
}
