// console.log("Hello World")
// console.dir(document)
// console.table({first:"test",val:9});
// console.error("Hello World")

// console.log("hello")
// var a = "hello"
// a
// console.log(a);

// var myName = "Laurence";
// var myCourse = "JavaScript";
// console.log(myName);
// var myAge = 40;
// console.log(myAge);
/*
hmm yes comment 
*/

// var welcomeMessage = "Welcome to SDV" 

// console.log(welcomeMessage)

// welcomeMessage = "Hello"

// console.log(welcomeMessage)

// var myName = "Phoenix"

// console.log(myName)

// myName = "John Doe"

// console.log(myName)

// var message;
// console.log(message);
// message = null;
// console.log(message);
// var myLight = false;
// console.log(myLight)

// myLight = true

// if(myLight){
//     console.log(myLight);
// }

// var score1, score2, score3, score4;
// var a = "Hello";
// var b = 10;
// var c = false;
// console.log(a)

// let name = "SDV503"
// console.log(name)
// name = "yee"
// console.log(name)


//1- local scope
//2- gobal scope

//1
// const mgs = "hello world"
// console.log(mgs)

// if(true) {
// const msg = "Hello world"
// }
// console.log(msg)

//Block scope
// if(false) {
// const msg ="Hello world"
// console.log(msg)
// }
// console.log(msg)
//Function scope
// function call() {
// var msg = "Hello World"
// console.log(msg)
// }

// console.log(call())
//console.log(msg)

//gobal scope

// var msg = "Hello World"

// function readMsg() {
// console.log(msg)
// }

// console.log(readMsg())

//keyword Lexical Scope
// function outerFunc() {
// var msg = "Hello World"
// function innerFunc() {
//     console.log(msg)
// }
// console.log(innerFunc())
// }

// console.log(outerFunc())

/*console output
Hello World
undefined
undefined

Lexical scope means that you can access a varible outside of a function 
once it has been decleared, but you can't access the varbile outside of 
the function if it was made in the function */


//Data types

/*
1- Numbers
2- Boolean
3- Strings
4- Objects
*/

// let a = 1 // a is number DataType
// let b = "Hello" // b is string DataType
// let c = true // c is a boolean DataType
// let d; // d is undefined DataType

// let test = 100 / "2"
// console.log(test)

// const value1 = '5';
// const value2 = 9;
// let sum = Number(value1) + value2;

// console.log(sum);

// let output = `the total of vaule1 and vaule2 is ${sum}`
// console.log(output)
// let Str = "John Doe"
// let Str1 = "is dead"

// let fullStr = Str + " " + Str1
// console.log(fullStr)

// let newStr = `Hello to my new  string! my name is ${Str} and he ${Str1}`
// console.log(newStr)

//Boolean only two keywords true and false

// let bol = true 
// console.log(bol)

// console.log(5 > 3)
// // >= or <= or ==
// console.log(3 >= 3)
// console.log(2 <= 1)
// console.log(10 == 9)

// let test = ["Hello", "John", 21, 2013] //Array
// console.log(test[2]) //acessing array value

// for (i=0; i<test.length; i++){
// console.log(test[i])
// }

//Object
// var cat = {
//     fur: 'black',
//     whiskers: 'many',
//     paws: 5
// }

// console.log(cat)

//What is a function

function div(num1, num2) {
return num1/num2
}
console.log(div(10, 5))

function hf(num1, num2, num3, num4){
    return num1/num2/num3/num4 
}

console.log(hf(4000,10,10,10))
console.log(hf(6969, 3, 45, 8))

function fourNumbers(num1, num2, num3, num4) {
    let result = num1 + num2 + num3 + num4
    return `The sum of four numbers is ${result}`
}
console.log(fourNumbers(2, 45, 35, 35))