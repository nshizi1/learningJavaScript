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



// Operators

// arithmetic operators:+,-,*,/,%
console.log(4%3);   //Outputs 1

// Comparison Operators: ==, !=, ===, !==
// == is opposite of != and === is opposite of !==

let one = 1;
let One = "1";
if(one == One){     // the == operator checks if variables have the same value
    console.log(`${one} and ${One} are the same`);   
}else{
    console.log(`${one} and ${One} are not the same`);   
}

if(one === One){        // the == operator checks if variables have the same value and are of the same datatype
    console.log(`${one} and ${One} are the same`);
}else{
    console.log(`${one} and ${One} are not the same coz are not of the same type`);
}

// Logical Operators: && || !

let isMale = true;
let isOld = false;

if(isMale && isOld){
    console.log("Male and old");
}else{
    console.log("Not male and not old");
}

if(isMale || isOld){
    console.log("Male or old");
}else{
    console.log("Not male or not old");
}

if(!isMale){
    console.log("Is Female");
}else{
    console.log("Is Male");
}

// Assignment operators: +=, -=, *=, /=, %=

let agn = 6;
console.log(agn/=3); //outputs 2


// Some sort exercises
console.log(5+3);
console.log(10-4);
console.log(15/3);
console.log(20%6);

if(5 == 5){
    console.log("Are equal");
}else{
    console.log("Are not equal");
}
if("Apple" == "banana"){
    console.log("Are the same");
}else{
    console.log("Are not the same");
}
if(10 != 15){
    console.log("Are not equal");
}else{
    console.log("Are equal");
}

if(7 === "7"){
    console.log("Are exactly equal");
}else{
    console.log("Are not exactly equal");
}

isSunny = true;
forgotUmbrella = true;
if(isSunny && forgotUmbrella){
    console.log("You wont get wet");
}else{
    console.log("You will get wet");
}

haveMovieTicket = true;
haveConcertTicket = true;

if(haveMovieTicket || haveConcertTicket){
    console.log("Will go out");
}else{
    console.log("Will not go out");
}

isRaining = true;
if(!isRaining){
    console.log("Will not carry umbrella");
}else{
    console.log("Will carry umbrella");
}

aSleep = true;
aWake = true;
if(aSleep && aWake){
    console.log("Cant be asleep and awake at the same time");
}else{
    console.log("Cant be asleep or awake")
}

isHappy = true;
isSad = false;
if(isHappy || isSad){
    console.log("Is happy or sad");
}else{
    console.log("Not happy or sad")
}

candies = 10;
candies += 3;
candies -= 2;
candies *= 5;
candies /=2;
console.log(candies);
