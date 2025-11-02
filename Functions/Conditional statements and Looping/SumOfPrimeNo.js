/**You need to write a JavaScript function that calculates the sum of all prime numbers between 1 and a given upper limit 𝑛. A prime number is a number greater than 1 that is only divisible by 1 and itself. Your task is to store the sum of these prime numbers in the variable answer.



Expected Input
50
Expected Output
328


Instructions:
a- Use a variable "answer" to accumulate the sum of prime numbers.

b- Prime Number Identification:

- Use a loop to iterate through each number from 1 to limit.
- For each number, determine if it is a prime number by checking its divisors.
- A number is prime if it has exactly two distinct divisors: 1 and itself.
c- If a number is identified as prime, add it to the answer.

d- Return the final value of the "answer" variable after processing all numbers up to the limit.



Hints:
- A number is considered prime if it can only be divided by 1 and itself.
- You can check if a number is prime by counting its divisors and ensuring there are exactly two.
- Use Nested Loops for solving this problem. 
function sumOfPrimeNumbers(limit) {
  let answer = 0; // Variable to store the sum of all prime numbers

  // Iterate through all numbers from 0 to the given limit
 
     // Inside the first loop create a variable to count the number of divisors of i
    for (let i = 0; i <= limit; i++){
         if(i )
    }
    // Check how many numbers divide i without a remainder by using nested loop

 */

    function sumOfPrimeNumbers(limit) {
  let answer = 0; // Variable to store the sum of all prime numbers

  // Iterate through all numbers from 0 to the given limit
    for (let i = 1; i <= limit; i++){
        let count = 0;
        for (let j = 1; j <= i; j++){
            if (i % j === 0) {
                count++;
            }
        }
        if (count === 2){
            answer = answer + i;
        }
    }
 
     // Inside the first loop create a variable to count the number of divisors of i

    // Check how many numbers divide i without a remainder by using nested loop
   

    // If count equals 2, then i is a prime number
  
  

  // Return the sum of all prime numbers between 0 and limit
  return answer;
}
