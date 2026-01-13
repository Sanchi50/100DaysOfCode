const user1 = {
  username: 'Sara',
  age: 12,
  marks:{
    maths:20,
    eng:25
  }

  };

//Deep Copy and shallow Copy

// const user2 = user1;
// console.log(user1);
// console.log(user2);

// user2.username = 'Harry';
// console.log(user2);
// console.log(user1);

//Shallow Copy

// const user2 = { ...user1 };
// console.log(user2);
// console.log(user1);

// user2.username = 'Harry';
// console.log(user2);
// console.log(user1);

//Object.assign
const user2 = Object.assign({}, user1);
console.log(user2);
console.log(user1);

user2.username = 'Harry';
user2.marks.maths = 10;
console.log(user2);
console.log(user1);


//A shallow copy creates a new object or array,
//  but it does not duplicate nested objects.
//  Instead, it copies their references.

let original = {
  name: "sam",
  address: { city: "Pune" }
};
let copy = { ...original }; // shallow copy
copy.name = "alex";
copy.address.city = "Mumbai";
console.log(original.name);        // "Sam" (unchanged)
console.log(original.address.city); // "Mumbai" (changed!)


const obj1 = {
  name: "John",
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
};

const obj2 = { ...obj1 };

obj2.name = "Jane";

obj2.greet = function () {
  console.log(`Hi, ${this.name}!`);
};

obj1.greet(); // Hello, John!
obj2.greet(); // Hi, Jane!
