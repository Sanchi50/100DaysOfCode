/**Write a JavaScript program that creates a simple JavaScript program that manipulates strings using various string methods.



Input:-
Str1 : Hello
Str2 : World


Expected Output:-
Concatenated String: HelloWorld
Index of 'World': 5


Test Cases:-
1- The final output should be printed correctly-

a- In the function name 'concatString' use the appropriate string method to concatenate string 'str1' and 'str2' and store the result in a variable name 'concat'. 
b- In the function name 'indexOfWorld' use the appropriate string method to find the index of the string "World" from the string which is stored in a variable name 'con'. Store this index in the variable name ' indexOfworld'. 


Note:
You will be given functions with inputs already provided as parameters (inside the parentheses of the function). Do not create or assign values to these inputs inside the function.



For example, if the function is written like this:





You should write your code only between the lines let answer; and return answer;
Use the inputs provided (param1 and param2) to write the required logic. The test cases will automatically provide values for these inputs, so you don’t need to define them yourself.
You will learn about functions in detail in upcoming lectures. For now, focus on writing the logic inside the given function.
 */

function concatString(str1, str2) {
  // You are provided with two input strings: str1 and str2.
  // Do not define or assign values to these inputs. They are passed automatically by the test cases.
  
  let concat;

  // Write your logic here:
  // Use a string method to concatenate str1 and str2, then store the result in 'concat'
   concat = str1.concat(str2);
  
  return concat; 
}

function indexOfWorld(str1, str2) {
  // You are provided with two input strings: str1 and str2.
  // Do not define or assign values to these inputs. They are passed automatically by the test cases.
  
  let indexOfworld;
  
  // Write your logic here:
  // 1. Concatenate str1 and str2.
  // 2. Find the index of "World" in the concatenated string.
  // 3. Store the index in 'indexOfworld'.
    
    let con = str1.concat(str2);
    indexOfworld = con.indexOf("World");
    
   
    
    
  
  return indexOfworld;  
}
