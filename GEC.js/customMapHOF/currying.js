//currying in js
function generateGreeting(greeting){
    return function(name){
        return function (title){
            return `${greeting}, ${title}, ${name}!`;
        }
    }
}
const msg1 = generateGreeting("Hello")("Alice")("Dr.");
const msg2 = generateGreeting("Hi")("Bob")("Mr.");


function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const double = multiply(2);
double(10); // 20
double(5);  // 10





 //example1
 //Convert a normal function sum(a, b, c) into a curried function so it works like sum(a)(b)(c).

 function add(a){
    return function (b){
        return function (c){
            return a + b + c;
        }
    }
 }
 console.log(add(1)(2)(3));

 //example2
 //Create a curried function greet(language)(name) that prints different messages depending on the language.
 function greet(language){
    return function langName(name){
        return `${name} speaks ${language}`

    }
 }
 console.log(greet("Adira")("Marathi"));

 //example3
 //Write a function power(a)(b) that returns a raised to the power b.
 function power(a){
    return function(b){
        return a ** b;
    }
 }
 const pow = power(2);
 const pow2 = pow(3)
  console.log(pow2)

  //example4
  //Build a curried version of multiply(a, b) and create double and triple from it.
  function multiply(a){
    return function multi(b){
        return a * b; 
    }
  }
 const m = multiply(5);
  console.log(m(5));

  //Create a curried function calculate(operation)(a)(b) where:
//operation = "add", "sub", "mul", "div".
function operation(num){
    return function(a){
        return function(b){
            if(operation === "add") return a + b;
            if(operation === "sub") return a - b;
            if (operation === "mul") return a * b;
            if (operation === "div") return a / b;
            return "Invalid operation";

        };
    };
}
console.log(calculate("add")(5)(3)); // 8
console.log(calculate("sub")(10)(4)); // 6
console.log(calculate("mul")(6)(7)); // 42
console.log(calculate("div")(20)(5)); // 4



//Make a curried filterBy(property)(value) function to filter an array of objects.
function filterBy(property) {
    return function(value) {
        return function(arr) {
            return arr.filter(function(item) {
                return item[property] === value;
            });
        };
    };
}
const data = [
    { name: "Sanchi", city: "Pune" },
    { name: "Riya", city: "Mumbai" },
    { name: "Tara", city: "Pune" }
];

const filterByCity = filterBy("city")("Pune");
console.log(filterByCity(data));
// [{ name: "Sanchi", city: "Pune" }, { name: "Tara", city: "Pune" }]




//Build a curried function startsWith(letter)(string) that checks if a string starts with a letter.
function startsWith(letter){
    return function(str){
        return str.startsWith(letter)
        
    }
}
console.log(startsWith("A")("Apple"));   // true
console.log(startsWith("B")("Apple"));   // false
console.log(startsWith("S")("Sanchi"));  // true


//Convert a function formatMessage(type, text) into a curried version and use it to create:
//errorMessage
//successMessage

function formatMessage(type){
    return function(text){
        return `${type} : ${text}`;
    }
}
const errorMessage = formatMessage("ERROR");
const successMessage = formatMessage("SUCCESS");
console.log(errorMessage("File not found"));
// OUTPUT: "ERROR: File not found"

console.log(successMessage("Upload complete"));
// OUTPUT: "SUCCESS: Upload complete"



/**Write a function curry(fn) that automatically converts ANY normal function into a curried version.
Example use:
function add(a, b, c) { return a + b + c; }
const curriedAdd = curry(add);
curriedAdd(1)(2)(3); // 6 */