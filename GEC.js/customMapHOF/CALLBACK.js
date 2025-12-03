/**You need to create a higher-order function that could be applied to an array of numbers to get the modified result.
Requirements:
1. Implement the customMap function without using any built-in higher-order functions (like map, forEach, etc.).
2. The function should take in two parameters: array (an array of numbers) and callbackFn (A function that takes a number as an argument and returns a transformed number.).
3. The customMap function should iterate over each element of the input array.
4. For each element, it should apply the callbackFn to generate a modified value.
6. The modified values should be stored in a new array, which will be returned after all elements have been processed.
7. The customMap function should return the new array containing all the modified values.
8. The callbackFn could be anything, for e.g., square(a function that returns the square of the number passes to it), double(a function that returns the double of a number), etc.
Expected Input:
customMap([2,3,4],square);
Expected Output:
[4,9,16]
Note:
Focus only on implementing the customMap function. You do not need to create the callbackFn itself.*/


function main() {
  // Define the array to be processed
  const array = [2, 4, 6, 2, 7, 8];

  function customMap(array, callbackFn) {
      // Step 1: Create new empty array
      let newArray = [];

      // Step 2: Loop over input array manually
      for (let i = 0; i < array.length; i++) {
          let element = array[i];

          // Step 3: Apply callbackFn to current element
          let modifiedValue = callbackFn(element);

          // Step 4: Store the modified value in newArray
          newArray.push(modifiedValue);
      }

      // Step 5: Return the completed array
      return newArray;
  }

  return customMap;
}
function square(num) {
  return num * num;
}

const func = main();
console.log(func([2,3,4], square)); 
// Output: [4, 9, 16]



//also can be done like this
function main() {
  // Define the array to be processed
  const array = [2, 4, 6, 2, 7, 8];

  // Create the customMap function with two arguments
  function customMap(array, callbackFn) {
      // Create an empty(new) array to store the results.
      let newArray = [];

      // Iterate over each element in the input array with the help of loop
      for (let item of array) {
          newArray.push(callbackFn(item))
      }
      return newArray;
      
          // Inside the loop Apply the callback function to the current element
      
          // Add the result to the new array with the help of push method

      // Return the new array outside the loop with the modified values
  }

  return customMap;
}
function square(n) {
  return n * n;
}

const funct = main();

console.log(funct([2,3,4], square))

