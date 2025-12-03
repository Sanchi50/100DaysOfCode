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





