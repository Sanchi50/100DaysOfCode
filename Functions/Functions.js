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