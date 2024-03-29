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




// Control flow: if,if-else, if-else-if-else, nested-if, switch case

// if and if-else
let age = 18;
if(age >= 18){
    console.log("You are old enough to vote");
}else{
    console.log("You are not old enough to vote");
}

// if-else-if-else
// number in range of 20
let nbr = 16;
if(nbr <= 0){
    console.log("Number is below the range of 20");
}else if(nbr <= 20){
    console.log("Number is in range of 20");
}else{
    console.log("Number is above the range of 20");
}

// nested if
let someOne = {
    gender: 'female',
    age: 18
};

if (someOne.gender === 'female'){
    if (someOne.age >= 18){
        console.log("You are a female and allowed to weave hair");
    }else{
        console.log("You are a female but not allowed to weave hair");
    }
}else{
    console.log("Cant weave hair if you are not a female");
}

// switch case

let cars = {
    "Sedan" : ["Toyota Camry", "Honda Accord", "Ford Fusion", "BMW 3 series", "Mercedes-Benz E-Class"],
    "SUV" : ["Toyota RAV4", "Honda CR-V", "Ford Explorer", "Jeep Grand Cherokee", "Subaru Outback"],
    "Hatchback" : ["Volkswagen Golf", "Ford Focus", "Mazda Mazda3", "Hyundai Elantra GT", "Honda Civic Hatchback"],
    "Coupe" : ["Audi A5", "BMW 4 series", "Mercedes-Benz C-Class Coupe", "Ford Mustang", "Chevrolet Camaro"],
    "Convertible" : ["Mazda MX-5 Miata", "BMW 2 Series Convertible", "Audi A3 Cabriolet", "Mercedes-Benz C-Class Cabriolet", "Ford Mustang Convertible"],
    "Station Wagon" : ["Subaru Outback", "Volvo V60", "Audi A4 Allroad", "Volkswagen Golf SportWagen", "Mercedes-Benz E-Class Wagon"],
    "Minivan" : ["Chrysler Pacifica", "Honda Odyssey", "Toyota Sienna", "Kia Carnival (Sedona)", "Dodge Grand Caravan"],
    "Pickup Truck" : ["Ford F-150", "Chevrolet Silverado 1500", "Ram 1500", "Toyota Tacoma", "GMC Sierra 1500"],

}

console.log(cars["Sedan"][2]);      //outputs: Ford Fusion


// switch statements

let switchValue = 5;
switch(switchValue){
    case 1:
        console.log("Monday");
    break;
    case 2:
        console.log("Tuesday");
    break;
    case 3:
        console.log("Wednesday");
    break;
    case 4:
        console.log("Thursday");
    break;
    case 5:
        console.log("Friday");
    break;
    case 6:
        console.log("Saturday");
    break;
    case 7:
        console.log("Sunday");
    break;
    default:
        console.log("No day found");
        
}

// Loops: for, while, do-while

let loopNbr = 1;
for(loopNbr; loopNbr <= 7; loopNbr++){
    loopNbr += loopNbr;
}
console.log(loopNbr);
while(loopNbr >= 0){
    console.log(loopNbr);
    loopNbr--;
}

do{
    console.log(loopNbr);
    loopNbr--;
}while(loopNbr >= 0)



// Functions

function Hello() {      // function without parameters
    console.log("Hello World!");
}
Hello();

function Hello(name) {  // function with one parameter
    console.log(`Hello ${name}!`);
}
Hello('John');

function Hello(name, age, location) {  // function with multiple parameters
    console.log(`Hello ${name}, you are ${age} years old! and you come from ${location}`);
}

Hello('John', 25, 'New York');

let bag = function(){
    console.log("Louis Vuitton");
}
bag();
let brand = function(example){
    console.log(`Hello ${example} brand?`);
}

brand("Louis Vuitton");

// Arrow functions

let car = (brand) => {
    console.log(`Hello ${brand} car!`);
}
car("Cadillac");

function evenOdd(evenOdd) {
    if(evenOdd % 2 == 0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}

evenOdd(9);

let digits = [1, 2, 3, 4];
let last =0;
digits.forEach(digit => {
    last += digit;
});
console.log(last);

// factorial
let fact = 1;
function factorial(factor) {
    for(let i = 1; i<= factor; i++){
        fact *= i;
    }
    console.log(fact);
}
factorial(5);

function temperature(celsius) {
    let fahrenheit = (((9/5)*celsius)+32);
    console.log(fahrenheit);
}
temperature(32);

// palindrome
function palindrome(value) {
    if(value === value.split('').reverse().join('')) {
        console.log("Palindrome");
    }else{
        console.log("Not palindrome");
    }
}
palindrome("omo");


console.log("lorem".length);
