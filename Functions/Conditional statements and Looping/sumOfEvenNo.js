/**You are tasked with creating a program that calculates the sum of even numbers up to a given limit. Write a JavaScript function using a for loop that takes a positive integer as input and returns the sum of all even numbers from 1 up to that integer.



Expected Input
6
Expected Output
12


Hints:
1. Use a for loop to go through each number from 1 up to and including the limit. 
2. Use an if statement to check if the current number is even (i.e., divisible by 2).
3. Add the even number to your result variable.
4. Return the result after completing the loop.*/

function sumOfEvenNumbers(limit) {
  // Initialize sum to store the sum of even numbers
  let result = 0;

  // Iterate through numbers from 1 to the given limit
    
  // Check if the current number is even
  // If even, add it to the sum
  for (let i = 1; i<=limit; i++) {
      if(i % 2 === 0)  {
          result += i;
      }
  }

  // Return the sum of even numbers
  return result;
}