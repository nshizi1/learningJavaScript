// camel case
var number;
number = 4;
console.log(number);
if(number != 4){
    console.log("number is not 4");
}else{
    console.log("number is 4");
}
if(number <= 0){
    console.log("number is less than 0");
}else{
    console.log("number is greater than 0");
}   
let text = "Hello";
console.log(text+" World!");
text += " ";
console.log(text);

let a = 2;
a+=4;
console.log(a);
let bool = false;
if(!bool){
    console.log("true");
}else{
    console.log("false");
}

// arrays
let numbers = [1,5,3,2,6,2,7,8];
console.log(numbers[1]); // access element by index (starts from 0)
console.log(numbers[5]);


// associative arrays


let people = [
    {
        name: "Wilson",
        age: 18,
        occupation: "Software Engineer"
    },
    {
        name: "Kevin",
        age: 23,
        occupation: "Computer Engineer"
    },
];
// display wilson

console.log(people[0].name);


//object

let person = {
    name: "John",
    age: 30,
    occupation: "Teacher"
};
console.log(person["name"]);


console.log(person.name + " is " + person.age + " years old and works as a "+ person.occupation);


// functions

function sayHello(name){    // function with name as a parameter
    console.log("Hello " + name);
}
sayHello("Nshiziboi");


// variables and datatypes
var x = 5;
let y = "Hello";
const PI = 3.14159;
console.log(x, y, PI);
// console.log(z)   // This will generate an error message

function scopeExample(){
    let f = 10;
    console.log(f);
}
scopeExample();

let myName = "Wilson Nshizirungu";
let myAge = 18;
let isStudent = true;
let favoriteFoods = ["Rice", "Meat", "Chips", "Noodles"];
let student = {
    "name": "John Doe",
    "age": 15,
    "isStudent": true
}
console.log(myName, myAge, isStudent, favoriteFoods);
console.log(student["name"], student["age"], student["isStudent"]);

let students = {
    "Wilson": {
        "fullNames": "Wilson Nshizirungu",
        "age": 18,
        "trade": "Software Development"
    },
    "Doe": {
        "fullNames": "John Doe",
        "age": 15,
        "trade": "Computer Science"
    }
}
console.log("Name is "+students["Wilson"]["fullNames"]+" and age is "+students["Wilson"]["age"]);
// Or display in this way
console.log(`Name is ${students['Wilson']['fullNames']} and age is ${students['Wilson']['age']}`);
