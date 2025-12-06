let input = [2,3,4,5,6,7,8]

function operation(input, fn){
    const output = [];
    for(let num of input){
        output.push(fn(num));
    }
    return output;

}

function square(num){
    return num * num;
}

function cubic(num){
    return num * num * num;
}

console.log(operation(input,square));
console.log(operation(input,cubic));



//Example2
function calculate(num, double){
    return double(x);
}
function double(num){
    return num * 2;
}
console.log(calculate(5,double));


//Example3
function multiplier(factor){
    return function (num){
        return num * factor;
    };
}
const double = multiplier(2);
console.log(double(5));
//multiplier(2)(5);



//example4
/*Task 1: Add 10 to a number using HOF
Write a HOF called applyOperation that takes:
a number a function
and applies the function to the number.
Create a function addTen and use it with the HOF.*/

function applyOperation(num, fn){
    return fn(num);
}
function addTen(n){
    return n + 10;
}
console.log(applyOperation(15, addTen)); 


//example5
/**Task 2: Create a function maker
Write a function power(p) that returns a new function.
That new function should raise a given number to power p. */

function power(num, sq){
    return sq(num)

}
function sq(n){
    return n * n;
}

console.log(5,sq());

//example6
//Create a function sayHello that takes a callback.
//Call the callback inside it.
function greet(fn){
    fn();

}


function sayHello(){
    console.log("Hello!"); 
}

greet(sayHello);


/*Create a function calculate(num, operation)
operation is a callback.
Call calculate(4, double) and calculate(9, square)
Write double and square functions too.*/

function calculate(num, operation){
    return operation(num);
}
function operation(n){
    return n * n;

}

//agar hume ek se zyada callback dena ho toh

function calculate(num, operation){
    return operation(num);
}
function square(n){
    return n * n;
}
function double(x){
    return x * 2;
}
console.log(calculate(5, square)); // 25
console.log(calculate(5, double)); // 10


//example 7
let inputss = [2,3,4,5]
function square(ninput){
    let squared = [];
    for(let num of input){
        squared.push(num * num);

    }
    return squared;
}

let inputs = [1,2,3,4,5,6];

function operation(input, fn){
    const output = [];
    for(let num of  input){
        output.push(fn(num));
    }
    return output;
}

function square(number){
    return number * number;
}

function cube(number){
    return number* number * number;
}
console.log(operation(inputs,square));
console.log(operation(inputs,square));


//example8
function applyTwice(num, fn){
    return fn(num);
}
function addTwo(n){
    return n + 2;
}
applyTwice(5, addTwo)   //7

//same fn 2 baar call apply twice karn aha taki result 9 aaye
function applyTwice(num, fn){
    const first = fn(num);   // pehli baar apply
    const second = fn(first); // dusri baar apply
    return second;
}

function addTwo(n){
    return n + 2;
}

console.log(applyTwice(5, addTwo)); // 9


/**Write a function filterEven(numbers, callback)
Use the callback to check if number is even.
Return only the even numbers. */

function filterEven(numbers, callback){
    const output = [];

    for (let num of numbers){
        if (callback(num)) {
            output.push(num);
        }
    }

    return output;
}

function isEven(n){
    return n % 2 === 0;  // true or false
}

console.log(filterEven([1,2,3,4,5,6], isEven));


//example 9
/**Write a function operateOnArray(arr, operation)
 * operation should run on every element.
Your job: write operation to convert every string to uppercase. */
function operateOnArray(arr, operation){
    return operation(arr);
}

function toUpper(arr){
    output = [];
    for(let item of arr){
        output.push(item.toUpperCase());
    }
    return output;
}
console.log(operateOnArray(["a", "b", "c", "d", "e"], toUpper));



function performOperation(operation){
    switch(operation){
        case "sum":
            return function (...numbers){
                return numbers.reduce((acc, curr) => acc + curr, 0);
            };

            case "product":
                return function(...numbers){
                    return numbers.reduce((acc, cur) => acc + cur,1);
                };
                default:
                    return function (){
                        return "Invalid operation";
                    };
    }
}

const Op1 = performOperation("sum");
const Op2 = performOperation("product");

const result1 = Op1(2,3,4);
const result2 = Op2(2,3,4,5);

console.log(result1);
console.log(result2);