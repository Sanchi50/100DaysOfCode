let n = 5;
let result = n++ + ++n;
console.log(result);

let count = 5;
if(count-- === 5){
    console.log("Matched");
    }else{
        console.log("Not Matched");
    }

//Early Returns
function getScore(score){
    if(score >=90 && score <=100) return "A";
    if(score >=80 && score <=89) return "B";
    if(score >=70 && score <=79) return "C";
    if(score >=60 && score <=69) return "D";
    if(score >=50 && score <=59) return "E";
    if(score >=30 && score <=32) return "TRY HARDER";
    return "Invalid Marks";

}
console.log(getScore(78));
//If-else statements
let a = 10;
if(a = 5){
  console.log("True block");
} else {
  console.log("False block");
}

/**1. It prints True block
   2. Because a = 5 is assignment, not comparison
   3. And the value assigned (5) is truthy, so the if condition passes like it owns the place */

   let x = 0;
if(x){
  console.log("Hello");
} else {
  console.log("World");
}
//if(0) = falsy value
//false means skipped the if, jumped into else, printed "World"
//"Hello" is left standing like unused code in a group project

let value = "0";
if(value){
  console.log("Yes");
} else {
  console.log("No");
}
//it prints yes bcz its not an empty string and non-empty string is truthy so if block runs.

let num;
if(num){
  console.log("Defined");
} else {
  console.log("Not defined");
}
//it will print Not Defined and undefined sits in the falsy VIP section along with 0, "", null, and NaN.

if([]){
  console.log("A");
} else {
  console.log("B");
}
/**[] (empty array) is an object
All objects, even sad empty ones, are truthy
The only falsey values are:
0, "", null, undefined, NaN, false
[] is not on that guest list, so it strolls into the if block like it paid extra. */

let age = 17;
let result = age >= 18 ? "Adult" : age > 12 ? "Teen" : "Kid";
console.log(result);
//result is Teen

let score = null;
let result1 = score ?? "No score";
console.log(result);
//N0 score
let score1 = 0;
console.log(score || "No score"); // "No score" (because 0 is falsy)
console.log(score ?? "No score"); // 0 (because 0 is NOT null/undefined)


/**Q1. Function bana jo number leta hai aur return kare:
"Even Positive"
"Even Negative"
"Odd Positive"
"Odd Negative"
"Zero"
(use if–else if only) */

function int(num){
  if(num === 0) return "Zero";
  if(num >= 0 && num % 2 === 0) return "Even Positive";
  if(num < 0 && num % 2 === 0) return "Even Negative";
  if(num >= 0 && num % 2 !== 0) return "Odd Positive";
  if(num < 0 && num % 2 !== 0) return "Odd Negative";
  }

  console.log(int(90));


// Do the same with ternary operator
function int1(numb){
  return numb === 0 ? "Zero" :
         numb > 0 && numb % 2 === 0 ? "Even Positive" :
         numb < 0 && numb % 2 === 0 ? "Even Negative" :
         numb > 0 && numb % 2 !== 0 ? "Odd Positive" :
         "Odd Negative";
}
console.log(int1(90));

/*age < 13 → "Kid"
13-19 → "Teen"
20-59 → "Adult"
60+ → "Senior" using switch*/
let age = Number(prompt("Enter your age"));

switch(true) {
  case (age < 13):
    console.log("Kid");
    break;
  case (age >= 13 && age <= 19):
    console.log("Teen");
    break;
  case (age >= 20 && age <= 59):
    console.log("Adult");
    break;
  case (age >= 60):
    console.log("Senior");
    break;
  default:
    console.log("Invalid Age");
}

//Take month = 1–12 and print month name using switch
//Default → "Invalid Month"
let month = Number(prompt("Enter a valid month"));

switch(month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Invalid Month");
}


//Check variable x and print:
// "Empty" for null, undefined, ""
// "Zero" for 0
// "Valid" for everything else
// (Use ternary + OR (||) only, no if)

let x = prompt("Input here");

(x === "0") ? console.log("Zero")
: (x === "" || x === null || x === undefined) ? console.log("Empty")
: console.log("Valid");

/**Check user role using switch:
let role = "admin";
"admin" → Full Access
"editor" → Limited Access
others → No Access */

let role = "admin";

switch (role) {
  case "admin":
    console.log("Full Access");
    break;
  case "editor":
    console.log("Limited Access");
    break;
  default:
    console.log("No Access");
}


let a = 15;
if(a > 10)
{
  console.log("Big number");
}

/**Variable input check karo:
null or undefined → "No value"
"" → "Empty string"
baaki sab → "Has value"
Rules:
No if
Only ?? and ternary
Jao. Laptop ko proud feel karao. */
let input = prompt("Enter something");

input ?? console.log("No value") || 
(input === "" ? console.log("Empty string") : console.log("Has value"));


let str1 = "JOHN";
let str2 = "DOE";
let answer = str1.concat(str2).toLowerCase()
console.log(answer);


