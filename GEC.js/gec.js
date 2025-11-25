// let userName = "Sanchi";
// let userAge = "29";
// console.log(userAge);
// console.log(userName);

// function greetUser(name){
//     var greet = "I hope you're doing fine";
//     console.log(`Hello ${name}, ${greet}`);
//     var currentYear = 2025;
//     const year = currentYear - userAge;
//     return `your birth year is ${year}`;

// }
// const birthYear = greetUser(userName);
// console.log(birthYear);


function factorial(n){
    if(n===0){
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));
/**1. factorial(5) call hota hai
n = 5, which is not 0.
So return karega: 5 * factorial(4)

2. factorial(4)
Return: 4 * factorial(3)

3. factorial(3)
Return: 3 * factorial(2)

4. factorial(2)
Return: 2 * factorial(1)

5. factorial(1)
Return: 1 * factorial(0)

6. factorial(0)
Yaha n === 0, condition hit
Return 1
(Ye base case hai. Base case na ho to recursion ajeeb spiral me chala jata hai.)
Ab stack wapas unwind hota hai:

factorial(0) = 1
factorial(1) = 1 * 1 = 1
factorial(2) = 2 * 1 = 2
factorial(3) = 3 * 2 = 6
factorial(4) = 4 * 6 = 24
factorial(5) = 5 * 24 = 120 */



var x = 10;
function foo(){
    console.log(x);
    var x = 20;
}
foo();

//output undefined
/** function ke andar ye ho raha hai Inside foo() the engine secretly rewrites it to this:
 * function foo() {
    var x;          // bana diya pehle hi, value = undefined
    console.log(x); // toh obvious hi hai undefined print hogi
    x = 20;
    Isliye function ke andar ek shadowed local variable ban gaya jo global x ko block kar deta hai. 
    Global wala x = 10 bechara bahar hi reh gaya, 
    function ne bola “ghar me ek aur x already hai, tumhari zarurat nahi.”
    Agar tum chahte ho ki wo global x use kare, to function ke andar var/let/const se x dubara declare mat karna.
}
 */

var x;
function foo(){
    x=10;
}

console.log(x);
//variable x is initialized with  value 10 in the function foo,
// but the function is never called so initialization never oncuechange.


function outer(){
    let x = 10;
    if(true){
        let y = 20;
        var z = 30;
        console.log(x + y + z);
    }
    console.log(x + y + z);
}
outer();
//60
//referenceError; y is not defined.
//the y in the blocked scope defined using let which has a local scope 
// and accessing it after the block end will return in reference error.

// closure

let a = "Global";
function outerPrint(){
let b = "OuterPrint";

function innerPrint(){
    let c = "innerprint";
    return `${a} -> ${b} -> ${c}`; 
}
const show = innerPrint();
console.log(show);
}
outerPrint();



//Exampl 2
function cart(){
    let items = 0;
    return {
        addItem: function(){
            items++;
        },
        getItem: function (){
            return items;
        }
    };
}
const closure = cart();
closure.addItem();
closure.addItem();
closure.addItem();
console.log(closure.getItem());
//output 3
//Each time the cart function is invoked,it creates a new closure instance. In the provided
//code, the closure constant holds a reference to a specific closure instance. Invoking closure
//.addItem() and closure.getItem() operates on that same closure instance,allowing access
//to the shared items variable.




