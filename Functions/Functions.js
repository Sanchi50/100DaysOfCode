//Write a function that takes your name as a parameter and prints a greeting.
function greet(name){
    console.log(`Hello ${name}`);
}
greet("sanchi");

//Create a function that returns the square of a number.
function square(num){
    return num * num;
}
square(5);

//Write a function that checks if a number is even or odd.
function num (v1){
    if(v1 % 2 === 0){
        console.log("Even");
    }else {
        console.log("Odd");
    }
}

// Make a function that takes two numbers and returns the larger one.
function larger(v1,v2){
    if(v1 > v2){
        console.log(`${v1} is larger`);
    }else {
        console.log(`${v2} is larger`);
    }
}

//Build a function that converts Celsius to Fahrenheit.
function fahren(celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
fahren(45);


//Arrow Function
/**3. Multiple parameters
Arrow function banao:
greet(name, age)
Jo print kare: "Hello <name>, your age is <age>" */
let greet = (name, age) => console.log( `Hello ${name}, your age is ${age}.`);

//lastdigit same or not
function lastDigit(num1,num2){
    let n1 = num1 % 10;
    let n2 = num2 % 10;

    let answer;
    if(n1 === n2){
        answer = true;
    }else {
        answer =  false;
    }
    return answer;
}

//or we can do it like this too
function lastDigit(num1, num2){
    return (num1 % 10) === (num2 % 10);

}


//equal number of digits

greet();

function greet(){
    console.log("Hello!");
}


let multiply = (a,b) => a* b;

//with brackets
let multiply = (a, b) => {
    return a * b;
};

console.log(multiply(4, 4));

function sayHi(name="guest"){
    console.log("Hi", name);
}
sayHi();

function abcd(...val){
    console.log(val);

}
abcd(1,2,3,4,5,6,7);


//use the rest parameter to accept any number of score and return the total.

function getScore(...scores){
    let total = 0;
    scores.forEach(function(val)){
        total = total + val;
        return total;
    }
}
console.log(getScore(10, 20, 30, 40, 50));


//Early return in fn

function checkAge(age){
    if(age < 18) return "Too Young";
    return "Adult";
}
checkAge(30);


//what is the return value of the fn
function f(){
    return;
}
console.log(f());


//pass a function inside another function

function abcd(val){

}
abcd(function (){
    console.log("Hey!");
});

//pure or impure
let total =  0;
function ab(numm){
    total += numm;
}
//impure qk bahar ki value change kar raha hai.


//convert the fn into pure fn
   let total = 0;
function addToTotal(num){
    let newTotal = 0;
     newTotal += num
    return total;
}


//closure
function outer(){
    count = 0;
    return function (){
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();

//convert normal function into IIFE
(function init(){
    console.log("Initialized");
}) ();
//function ko () iske andar wrap kar dena hai aur fir (); laga dena hai bas.


//Write a BMI Calculator
function bmi(weight, height){
    return weight/(height*height);
}
console.log(bmi(52,1.4).toFixed(2));

//closure function example
function outer(){
    let count = 0;
    return function (){
        count ++;
        return count;
    };
}

const c = outer();
console.log(c()); //1
console.log(c()); //2
console.log(c()); //3
console.log(c()); //4
console.log(c()); //5

let d = outer();
console.log(d());//1
console.log(c());//6

//create a pure function to transform a value
function double(val){
    return val * 2;
}
console.log(double(5));
console.log(double(15));


//use IIFE to create a variables
//iife ke andar jo bhi banayenge usko hum bahar access nahi kar sakte.
(function (){
    const password = "secret password";
    console.log(password);
}) ();

console.log(password); // ye hum access nahi kar sakte kyunki ye IIFE function hai 