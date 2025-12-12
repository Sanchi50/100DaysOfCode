/**You are working on a project that involves managing user profiles. Each user profile is represented as an object with properties such as name, age, and email.



Objective:
Your task is to implement the following functionality:
1. updateProfile function: This function should take two parameters: user (an object representing the user profile) and updates (an object containing the properties to update in the user profile). The function should use the Object.assign method to update the user profile with the properties from the updates object. Ensure that the original "user" object remains unchanged during the update process.
Return the updated user object.
2. freezeProfile function: This function should take one parameter: user (an object representing the user profile). The function should use the Object.freeze method to make the user profile object immutable, preventing any further modifications.
Return the same frozen user object.
Implement the updateProfile and freezeProfile functions to achieve this functionality.


Hint:
Learn more about the Object.assign method using the link:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
Learn more about the Object.freeze method using the link:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

// Instructions:
// 1. Implement the updateProfile function to update the user profile using Object.assign.
// 2. Implement the freezeProfile function to freeze the user profile using Object.freeze.

function updateProfile(user, updates) {
    // Implement the code here
  }
  
  function freezeProfile(user) {
    // Implement the code here

 */

    function updateProfile(user, updates) {
  // Ensure original object is not changed
  const newUser = Object.assign({}, user, updates);
  return newUser;
}

function freezeProfile(user) {
  return Object.freeze(user);
}





const user = { name: "Sanchi", age: 20, email: "test@mail.com" };

const updated = updateProfile(user, { age: 21 });
console.log(updated);   // { name: 'Sanchi', age: 21, email: 'test@mail.com' }
console.log(user);      // original unchanged

const frozen = freezeProfile(updated);
frozen.age = 50;        // ❌ won't change
console.log(frozen.age); // still 21



let parent = {
  type: "human",
  sayHi() { console.log("Hi"); }
};

let child = Object.create(parent);
child.name = "Sanchi";

child.sayHi(); // parent se inherit kiya
