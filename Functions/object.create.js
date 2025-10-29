/**ou are working on a project that involves managing user profiles. Each user profile is represented as an object with properties such as name, age, and email.



Objective:
Your task is to implement the following functionality:
1. updateProfile function: This function should take two parameters: user (an object representing the user profile) and updates (an object containing the properties to update in the user profile). The function should use the Object.assign method to update the user profile with the properties from the updates object. Ensure that the original "user" object remains unchanged during the update process.
Return the updated user object.
2. freezeProfile function: This function should take one parameter: user (an object representing the user profile). The function should use the Object.freeze method to make the user profile object immutable, preventing any further modifications.
Return the same frozen user object.
Implement the updateProfile and freezeProfile functions to achieve this functionality.
 */


function updateProfile(user, updates) {
    
    const updateUser = Object.assign({}, user, updates);
    return updateUser;
  }
  
  function freezeProfile(user) {
    
      Object.freeze(user);
      return user;
  }
