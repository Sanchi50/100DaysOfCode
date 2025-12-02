/**Create a closure function that generates unique registration numbers in the following format:

A_2023_1   // For first call
A_2023_2   // For second call
A_2023_3   // For third call
Requirements
The function generateID should take a parameter as a start value.
It should return a function which, when called each time, should generate the next ID.
Input:
let getID = generateID(2)
getID()
getID()
Output:
A_2023_2
// A_2023_3 */




function generateID(startValue) {
    let count = startValue;

    return function () {
        const year = 2023;
        const id = `A_${year}_${count}`;
        count++;
        return id;
    };
}
 


//example 3
var a = 1;
function b(){
    a = 10;
    return;
     function a(){}
}
b();
console.log(a);


//example 4
let result = (() => {
    let x = 5;
    return () => {
        x += 1;
        return x;
    
    };

})();
console.log(result);


example 5
function outer() {
    let counter = 0;

    function inner() {
        counter++;
        console.log(counter);
    }

    return inner;
}

const fn = outer();
fn();  // 1
fn();  // 2
