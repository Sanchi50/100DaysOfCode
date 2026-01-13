const user1 = {
  username: 'Sara',
  age: 12,
  marks: {
    maths: 20,
    eng: 25,
  },
  getMarks() {
    console.log(this.marks);
  },
};
//Deep Copy and shallow Copy

//Deep Copy

const user2 = JSON.parse(JSON.stringify(user1));

user2.username = 'Harry';
user2.marks.maths = 10;
console.log(user2);
console.log(user1);

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
// const user2 = Object.assign({}, user1);
// console.log(user2);
// console.log(user1);

// user2.username = 'Harry';
// user2.marks.maths = 10;
// console.log(user2);
// console.log(user1);


JSON.parse(JSON.stringify(obj))



/**What structuredClone() Can Handle

This is where it flexes.

It supports:

Objects

Arrays

Nested structures

Date

Map

Set

RegExp

Blob

File

TypedArrays

Example:

const obj = {
  date: new Date(),
  map: new Map([["a", 1]]),
  set: new Set([1, 2, 3])
};

const copy = structuredClone(obj);


Everything gets cloned properly.

What It CANNOT Clone

It does NOT copy:

Functions ❌

DOM nodes ❌

Closures ❌

Symbols ❌

Example:

structuredClone({
  greet() {
    console.log("Hi");
  }
});


This will throw an error.

Why? Because functions are behavior, not data. Deep copy is for data.

Why It Exists

Because all older deep-copy methods were either:

Broken

Limited

Hacks

Bug factories

JSON trick:

JSON.parse(JSON.stringify(obj))


Fails with:

Date

Map

Set

undefined

Infinity

Functions

structuredClone() fixes all that.

Interview One-Liners

Use these:

• structuredClone() creates a deep copy
• It removes shared references
• It supports complex data types
• It does not clone functions
• It is safer than JSON-based cloning

When Should You Use It?

Use structuredClone() when:

You need a real deep copy

Your object has nested structures

You want zero reference sharing

If you want, I can now show you a side-by-side comparison of:
spread vs JSON vs structuredClone
so you never confuse them again. */
const obj = {
  date: new Date(),
  map: new Map([["a", 1]]),
  set: new Set([1, 2, 3])
};

const copy = structuredClone(obj);
