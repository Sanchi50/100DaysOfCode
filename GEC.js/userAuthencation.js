/**You are required to build a user authentication system for a web application Using the IIFE.
Requirements
1. Create an empty array called registeredUsers to store user data.
2. Create an IIFE that returns an object with two functions:
registerUser: registerUser(username, password):
(i) It should take two parameters "username" and "password" and add them to the registeredUsers array. 
(ii) It should call the checkCredentials function to determine if a user with the same credentials already exists in the registeredUsers array.
(iii) If the user is already registered then return `The user is already registered` otherwise push the user object to the registeredUsers array and return ` The user have been added to the registeredUser array`. 
checkCredentials: checkCredentials(username, password): 
(i)  It should take two arguments, "username" and "password".
(ii) It should check if a user with the given credentials exists in the registeredUsers array. It should return false if the user is not present otherwise true.
(iii) The checkCredentials function is NOT exposed outside the IIFE, so it can only be called from within the IIFE (e.g., inside registerUser).
Input:
userAuth.registerUser('testuser', 'password123');
userAuth.registerUser('testuser','password123');
Output:
The user have been added to the registeredUser array
The user is already registered */


 function main() {

  let userAuth = (
    function () {
      // Create an empty array to store user data.
      let registeredUsers = [];

      // Define the checkCredentials function (PRIVATE)
      function checkCredentials(username, password) {
        for (let i = 0; i < registeredUsers.length; i++) {
          const user = registeredUsers[i];
          if (user.username === username && user.password === password) {
            return true;
          }
        }
        return false;
      }

      // Define the registerUser function (PUBLIC)
      function registerUser(username, password) {
        const exists = checkCredentials(username, password);

        if (exists) {
          return "The user is already registered";
        }

        registeredUsers.push({
          username: username,
          password: password
        });

        return "The user have been added to the registeredUser array";
      }

      // Return public functions
      return {
        registerUser
      };
    }
  )();

  // Example usage
  console.log(userAuth.registerUser("user1", "password123"));
  console.log(userAuth.registerUser("user1", "password123"));

  return userAuth;
}
