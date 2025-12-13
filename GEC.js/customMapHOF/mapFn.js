const num = [1,2,3,4]

let double = num.map((n)=> n * 2 );
console.log(double); 
console.log(num);   


//example2
const users = [
  { name: "Ayaan", age: 20 },
  { name: "Reva", age: 25 },
];

const names = users.map(u => u.name);

console.log(names); // ["Ayaan", "Reva"]
//u = { name: "Sanchi", age: 20 }
//u.name = "Sanchi"
//bcoz objects use dot notation



//example3
let fruit = ["banana","apple","mango"];

let maparray = fruit.map((item, ind) => {
    return { [ind] : item.length};
});

console.log(maparray);


//example4
//Ek array ["cat","dog","fish"] ko map karke har word ki length ka array banao.
//Output example: [3, 3, 4]

let array = ["cat","dog","fish"];
let len = array.map((n)=> {
    return {[n]: n.length};

});
console.log(len)

//example5
//Numbers [1,2,3,4,5] ka array map karke har element ka square return karo.
let num1 = [1,2,3,4,5]

let doubled = num1.map(n => n * n)
console.log(doubled)

//example6
//Fruits ["apple","mango","kiwi"] ka array map karke uppercase version banao.
let fruits = ["apple", "mango", "kiwi"]

let upCase = fruits.map(n => n.toUpperCase());
console.log(upCase)

//example7
//Ek array [2,4,6,8] ko map karke har element ko "Value: X" string mei convert karo.
let arr = [2,4,6,8]
let arra = arr.map(n => {
return `Value:${n.toString()}`});

//let arra = arr.map(n => `Value: ${n}`);

//example8
/**Map karke names ka array banao. */
let students = [
  {name: "Ayaan", age: 20},
  {name: "Reva", age: 22},
  {name: "Kabir", age: 19}
];

let arrayy = students.map(name => name.name)
 let aarrayy = students.map(s => `${s.name} is ${s.age}`);
//ye bhi kar sakte if we only want names
 let namess = students.map(({ name }) => name);
console.log(namess);

let formatted = students.map(({ name, age }) => ({
  studentName: name,
  studentAge: age
}));
console.log(formatted);
//output
[
  { studentName: "Ayaan", studentAge: 20 },
  { studentName: "Reva", studentAge: 22 },
  { studentName: "Kabir", studentAge: 19 }
]

//example8
//Ek price array [100, 200, 300] ko map karke har price par 18% GST add karo.
//Example: 118, 236, 354

let price = [100,200,300]
let prices = [100, 200, 300];

let withGST = prices.map(p => p + p * 0.18);
//let withGST = prices.map(p => p * 1.18);


console.log(withGST);

newPrice = price + (price * 0.18)
price + price * 0.18
 price * (1 + 0.18)
 price * 1.18




 //Convert an array of strings to uppercase using map().
 const words = ["cat", "dog", "rat"];
let toUpper = words.map(str => str.toUpperCase());
console.log(toUpper)



//Har number ko double karke new array banao
let num = [20, 40, 70, 100];
let doubledd = num.map(n => n * 2)

//add 5 to each element in an array
let num = [15, 25, 40, 55];
let add = num.map(n => n+ 5)

//square of every num
let num = [100, 400, 1225, 2500]
let sq = num.map(n => n*n)
console.log(sq)

//convert to string
let str = [10, 20, 35, 50];
let toStr = str.map(n => n.toString());
console.log(toStr)

//Har number ko true/false me convert karo:
//True agar number 30 se bada ho.
let num = [10,89,847,845,21,2,12,34,12,]
let bool = num.map(n => n > 30 );
console.log(bool)

/**Numbers ko USD conversion jaise convert karo:
num / 83
Output: approx USD values. */
let num = [780];
let usd = num.map(n => n/83)
console.log(usd)
/**1 USD ≈ 83 INR
So:
780 INR / 83 ≈ 9.39 USD
 */


/**Har number ko {value: num} object me convert karo.
Output:
[{value:10}, {value:20}, {value:35}, {value:50}] */
let num = [10,89,847,845,21,2,12,34,12,]
let val = num.map(n => ({value:n}))
console.log(val)
/**return nahi likha qk implicit return in arrow fn.
 * Why parentheses are needed for objects
If you write this:
n => { value: n }
JS thinks { value: n } is a function block, not an object.
So we wrap it like this:
n => ({ value: n })
Now JS knows it’s an object being returned, not a block */

//Har number ko "Item - <number>" format me convert karo.
//Output: ["Item - 10", "Item - 20", ...]
let num = [10,20,30,40,50];
let out = num.map(n => (`Item - ${n}`))
console.log(out)

/**Har number ke basis par priority tag banao:
If number < 25 → "low"
if between 25–40 → "medium"
else "high"
Output example: ["low", "low", "medium", "high"] */
let num = [1,23,5,34,23,32,658,23,34,232,21,231,12];

let pr = num.map(n => 
  n < 25 
    ? "low" 
    : n >= 25 && n <= 40 
        ? "medium" 
        : "high"
);

console.log(pr);

//or hum aise bhi kar sakte hai
let pr = num.map(n => {
  if (n < 25) return "low";
  if (n <= 40) return "medium";
  return "high";
});



//return {original:value , doubled:value}
 let nuum = [10,20,30,40,50];

 let value = nuum.map(n => {
  return {original: n,
        doubled: n * 2;
 };
 })

 //second way to do it
 let value = num.map(n => ({ original: n, doubled: n * 2 }));

 //11. Har number ko convert karo:
//If even → {num, type:"even"}
//If odd → {num, type:"odd"}
let num = [1, 23, 5, 34, 23, 32, 658, 23, 34, 232, 21, 231, 12];
let result = num.map(n => ({
  num: n,
  type: n%2 === 0? "even" : "odd"
}));

/*12. Har number ko percentage me convert karo:
num / total * 100
(Pehle total = 10+20+35+50)
Output: percentages.*/
let num = [10,20,35,50]
let num = [10,20,35,50]
let reduce = num.reduce((acc, curr) => acc + curr, 0);
console.log(reduce)
let map = num.map(n => (n/reduce) * 100);
let result = map
console.log(result)

//or we want rounded percentage
let result = num.map(n => ((n / total) * 100).toFixed(2));

// Har number ko index ke saath merge karke banao:
//{index, value, multiplied: value * index}

//create new object from old 
//question: add new property isEligible:true if age is greater than 18 
//else isEligible: false

let arr = [{name:"fgd", age:67},{name:"wegfhe", age:78}]
let result = arr.map(n => {
    if(n.age > 18) return {...n, isEligible:true}
    else{
        return {...n,isEligible:false}
    }
})
console.log(result)

//  let obj = {name:"fgd", age:67}
//  console.log({...obj,hobby: "coding", bf:"chidpokla"})


//we want to add 1 to each element of nested array
let array = [[1,2],[3,4]]
let update = array.map(n => n.map(e=>e+1) )
console.log(update)
