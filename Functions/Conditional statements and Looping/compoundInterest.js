/**Create a Compound Interest program that calculates the total amount accumulated after a certain period based on the following attributes:

a. principalAmount: The principal value deposited

b. annualInterestRate: Interest rate per year(expressed as a decimal).

c.  numberOfYears: Period for which interest has to be given. 


Requirements:

1. Calculate the total amount accumulated using the compound interest formula.
2. Do not use toFixed or round off the answer.
3. Use a while loop to calculate the total amount over the specified number of years.
4. Store the final amount in the answer variable. 


Expected Input
principalAmount : 500$
annualInterestRate : 0.08 (8% expressed as a decimal)
numberOfYears : 5
Expected Output
734.66
Expected Flow of Calculation:
For principalAmount = 500, annualInterestRate = 0.08, and numberOfYears = 5:
Year 1: 500 × 0.08 = 40, new amount = 500 + 40 = 540
Year 2: 540 × 0.08 = 43.2, new amount = 540 + 43.2 = 583.2
Continue similarly until Year 5.


Test Cases
 a- You must calculate the total amount accumulated based on the given attributes.
 b- Store the final amount in the "answer" variable.
function compoundInterest(principalAmount, annualInterestRate, numberOfYears) {
  let answer;
  
  // Initialize the answer variable with the principal amount
    answer = principalAmount;
  
  // create and initialize a year counter to 1
    let year = 1;
    


 */

    function compoundInterest(principalAmount, annualInterestRate, numberOfYears) {
  let answer;
  
  // Initialize the answer variable with the principal amount
    answer = principalAmount;
  
  // create and initialize a year counter to 1
    let year = 1;
    

  // Use a while loop to calculate the total amount over the specified number of years
    while (year <= numberOfYears) {
        let interest = answer * annualInterestRate;
        answer = answer + interest;
        year++;
   }

  // Return the final amount after all years
  return answer;
}
