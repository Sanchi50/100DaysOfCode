/**You are working on a project that involves managing user profiles. Each user profile is represented as an object with properties such as name, age, and email.



Objective:
Your task is to implement the following functionality:
1. updateProfile function: This function should take two parameters: user (an object representing the user profile) and updates (an object containing the properties to update in the user profile). The function should use the Object.assign method to update the user profile with the properties from the updates object. Ensure that the original "user" object remains unchanged during the update process.
Return the updated user object.
2. freezeProfile function: This function should take one parameter: user (an object representing the user profile). The function should use the Object.freeze method to make the user profile object immutable, preventing any further modifications.
Return the same frozen user object.
Implement the updateProfile and freezeProfile functions to achieve this functionality. */


// Function to update user profile without changing the original object
function updateProfile(user, updates) {
  // Create a copy of the original user object and merge updates into it
  const updatedUser = Object.assign({}, user, updates);
  return updatedUser;
}

// Function to freeze the user profile (make it immutable)
function freezeProfile(user) {
  Object.freeze(user);
  return user;
}

// Example usage:
const user1 = {
  name: "Alice",
  age: 25,
  email: "alice@example.com"
};

// Update the profile (original object stays unchanged)
const updatedUser = updateProfile(user1, { age: 26, email: "alice.new@example.com" });
console.log("Original user:", user1);
console.log("Updated user:", updatedUser);

// Freeze the profile
const frozenUser = freezeProfile(updatedUser);
frozenUser.name = "Changed"; //  This won’t work — object is frozen
console.log("After trying to modify frozen user:", frozenUser);
