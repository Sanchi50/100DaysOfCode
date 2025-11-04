/**Write a program to calculate the area of the rectangle for the given dimension (len and wid). Store the area in the result variable.
Input:-
5, 5
Expected Output:-
25
Note:-
You will be given a function with inputs already provided as parameters (inside the parentheses of the function). Do not create or assign values to these inputs inside the function.
For example, if the function is written like this:
You should write your code only between the lines let answer; and return answer;
Use the inputs provided (param1 and param2) to write the required logic. The test cases will automatically provide values for these inputs, so you don’t need to define them yourself.
You will learn about functions in detail in upcoming lectures. For now, focus on writing the logic inside the given function.
 */
function main(len, wid) {
  let result;
// You have been provided with two input values: len and wid.
  // Do not define or assign values to these inputs?they are provided automatically by the test cases.
   // Write your logic here:
  // Task:
  // 1. Calculate the area of a rectangle using len (length) and wid (width).
  // 2. Store the area in the variable 'result'.
    result = len * wid;
    console.log(result);
return result; // Return the calculated area
}
