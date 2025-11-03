/**Write a program that checks whether a given year is a leap year. The program should follow specific rules to determine if a year is a leap year and store the result as a boolean value (true or false) in a variable named answer.



Check the following conditions to check if a given year is a leap year or not:

Condition 1: If a year is divisible by 4, it is a leap year.

Condition 2: If a year is divisible by 100, it is not a leap year.

Condition 3: If a year is divisible by 400, it is a leap year even though it is divisible by 100.



Expected Input
2013
Expected Output
false
Expected Input
2004
Expected Output
true
Expected Input
2100
Expected Output
false


Test Cases
Check if a year is a leap year and store the boolean value in the answer
Check if a year is not a leap year and store the boolean value in the answer
Check if a year is divided by 4 but is not a leap year and store the boolean value in the answer


Notes:
Pay attention to how the conditions are nested. Misplacing the if-else logic can lead to incorrect results.
Remember that true and false should be boolean values, not strings.
 */
function leapYear(year) {
    let answer;
   //Write your code here
    if (year % 400 === 0){
        answer = true;
    }
    else if(year % 100 === 0){
        answer = false;
    }
    else if( year % 4 === 0){
        answer = true;
    }
    else{
        answer = false;
    }
    
return answer;
}

