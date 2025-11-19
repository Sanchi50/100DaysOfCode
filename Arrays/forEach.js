let fruits = ["apple", "banana", "orange", "mango", "litchi"];
fruits.forEach(function(val){
    console.log(val);
})

//Ek numbers ka array banao. Array ka first element print karo.
let num =[1,4,6,8,10,15];
console.log(num[0]);

//Ek array me push() karke ek naya item add karo. Phir array print karo.
let fruits = ["apple", "banana", "orange", "mango", "litchi"];
fruits.push("strawberry");

//Ek array me se pop() se last element remove karo. Output show karo.
let fruits = ["apple", "banana", "orange", "mango", "litchi"];
fruits.pop();

// Ek array me se shift() se first element remove karo. Result print karo.
let fruits = ["apple", "banana", "orange", "mango", "litchi"];
fruits.shift();

//Ek array [10, 20, 30, 40] ka sum forEach se nikalna hai.
let array = [10,20,30,40]
let sum = 0;
array.forEach(function(val){
    sum = sum + val;
});

//ye return kuch nahi karta
let arr = [10,20,30,40,50];
let sum = 0;
arr.forEach(function(val){
    sum = sum + val;
})
console.log(sum);

//Users ka array banao, jaise ["Aman", "Sanchi", "Ritu"]. 
// ForEach se har naam ke aage "Hello" print karo.

let user = ["Aman", "Sanchi", "Ritu"];
user.forEach(function(greet){
    console.log("Hello" + " " + greet);
});

//in arrow fn with tempelate literal
user.forEach(greet => console.log(`Hello ${greet}`));

//Ek array me 1 se 5 tak digits rakho. 
// ForEach use karke saare numbers ka double print karo.
let arr = [1,2,3,4,5];
arr.forEach(function(double){
    console.log(` ${2 * double}`);
});

//or we can solve it like
let arr = [1,2,3,4,5];
arr.forEach(function(n){
    let double = 2 * n;
    console.log(double);
    
});

//Ek array me koi city search karna hai. Agar "Delhi" mile to "Found" print karo 
// warna "Not Found".

let array = ["Mumbai", "Kolkata", "Surat", "Raipur", "Delhi", "Pune", "Munnar"];
if(array.includes("Delhi")){
    console.log("Found");
}else {
    console.log("Not Found");
}

//or using or each
let array = ["Mumbai", "Kolkata", "Surat", "Raipur", "Delhi", "Pune", "Munnar"];
let found = false;
array.forEach(function(city){
      if(city === "Delhi")
        
    /**semicolon nahi lagana hai yaha if ke baad agar lagaya toh
     * If statement khali ho gaya.
Tumne semicolon laga ke condition ko terminate kar diya.
Neeche jo found = true hai, wo IF ke andar nahi chal raha.
Wo hamesha chalta hai, chahe Agra ho ya na ho. */
      found = true;
});

if(found){
    console.log("Found");
}else {
    console.log("Not Found");
}


//Ek empty array banao. push() use karke 3 items add karo. Final array print karo.
let array = ["a", "b", "c", "d", "sanchi"];
array.push("saket", "aniket", "sanket");
console.log(array);

//Ek array ka length print karo without using loops.
let arr = [
  'a',      'b',
  'c',      'd',
  'sanchi', 'saket',
  'aniket', 'sanket'
];

console.log(arr.length); // 8 


//ya isko for loop se

let arr = [
  'a',      'b',
  'c',      'd',
  'sanchi', 'saket',
  'aniket', 'sanket'
];
let count = 0;

for(let i=0; i< arr.length; i++){
    count++;

}
console.log(count);

//using foreach
let arr = [
  'a',      'b',
  'c',      'd',
  'sanchi', 'saket',
  'aniket', 'sanket'
];
let count = 0;
arr.forEach(function(val){
    count = count + 1

});

//Ek array me se koi specific value remove karni hai.
//  Example: [1,2,3,4] me se 3 remove karo splice() se.
let ex = [1,2,3,4];
console.log(ex.splice(2,1));

//Ek array of strings ko join() se ek single string me convert karo.
let arr1 = ["sanchi", "web-developer", "Mumbai"];
console.log(arr1.join("-"));

//Ek array [5,1,3,2] ko ascending order me sort karo.
let array = [5,4,3,2,1];
array.sort(function(a, b){
    return a - b;
});
console.log(array);

//another question
let array = [5,14,33,245,1];
array.sort(function(a, b){
    return a - b;
});
console.log(array);

//Destructuring Array
const arr = [1,2,3,[4,5,6]];
const a1 = arr[0];

//Create an array with 3 fruits and print 2nd fruit add guava at the end and pineapple at the
//starting of this array
let fr = ["mango", "banana", "oranges"];
let f2 = fr[1];
console.log(f2);
fr.push("guava");
fr.unshift("pineapple");

//replace banana with kiwi
let fr = ["mango", "banana", "oranges"];
fr.splice(1,1,"kiwi");

//remove the last element from this array using a method
let num = [1,2,3,4,5,6,7];
num.pop();

//Extract only the middle 3 elements from this array.
let num = [1,2,3,4,5,6,7,];
num.splice(2,3);

//add red and blue at index 1 in this array
//yaha splice ko bataya ke hatana nahi hai kuch 1 ke baad agar value rakh do to vo add kar deta hai vo values.
//1 = konsa index se hatanahai
// 0 = means kuch bhi nahi hatana
//red blue mean inhe add kar do 1st index pe.
let colors = ["Green", "Yellow"];
colors.splice(1,0,"Red", "Blue");
console.log(colors);

//sort this array alphabetically and reverse it
let names = ["Zara", "Evirose", "Nefsfinds", "H&M", "Zudio"]
names.sort().reverse();

//use .map to square each number
let arr = [1,2,3,4]
let square = arr.map(function(sq){
    return sq*sq;
});


//use .filter to keep the number that is greater than 10.
let arr = [5,12,8,20,3];
arr.filter(function(val){
    return val>10;
});

//use .find() to get 1st num which is less than 10
let arr = [15,20,25,8,3,45];
let f = arr.find(function(ugh){
return ugh<10
});


//use .some() to check if any student has scored below 35:
let score = [45,60,67,90,97,28,78,56,89];
let s = score.some(function(val){
    return val<35;
});

//use .every() to check if all values are even
let val = [2,4,6,8,10];
let eve = val.every(function(ch){
    return ch % 2 === 0;
});

//destructure this array to get the firstname and lastname
let fullname = ["Sanchi", "Wahane"];
let [firstname,lastname] = fullname;

//Merge two arrays using spread operators
let a = [1,2];
let b = [3,4];
let c =[...a,...b];
console.log(c);

//add India to the start of the array using spread
let countries = ["U.K.", "U.S"]
countries = ["India",...countries];

//clone this array properly (not by reference)
let arr = [1,2,3,4,5];
let newArr = [...arr];


