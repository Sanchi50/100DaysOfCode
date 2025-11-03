/**Write a function (already given in the starter code as 'main') to determine if a patient has a fever based on their body temperature. The temperature is given in Fahrenheit, and you need to convert it to Celsius to make the determination.



Input:-
For an input temperature of 98.6 Fahrenheit, the function should return:
Output:-
You have a fever! Your temperature is 37.0°C.


Test Cases:-
There should be a correctly defined temperature function.

1- Convert the temperature from Fahrenheit (tempF) to Celsius. Use the appropriate conversion formula.

2- Then apply the if condition to check whether the converted value is greater than or equal to 37. 

3- If the Celsius temperature is 37°C or higher, set the result variable to indicate a fever with the temperature rounded to one decimal place.

4- If the Celsius temperature is below 37°C, set the result variable to indicate no fever, with the temperature also rounded to one decimal place.

5- Return the result variable from the function.


Hints:-


To round the converted temperature to one decimal place use the toFixed() method. You should use this method when assigning the value to the result variable to ensure the temperature is displayed with one decimal precision.



For example, if your converted temperature variable is convertedCelsius, you can round it by using convertedCelsius.toFixed(1).

function main(tempF) {
  let result;
  let tempC; 
  // Step 1: Convert the temperature from Fahrenheit to Celsius.
  // Step 2: Store the converted temperature in a new variable.
    
    tempC = ((tempF - 32)*5/9).toFixed(1);
  
  // Step 3: Check if the rounded temperature is 37?C or higher with the help of if and else condition
     if(tempC >= 37){

 */
function main(tempF) {
  let result;
  let tempC; 
  // Step 1: Convert the temperature from Fahrenheit to Celsius.
  // Step 2: Store the converted temperature in a new variable.
    
    tempC = ((tempF - 32)*5/9).toFixed(1);
  
  // Step 3: Check if the rounded temperature is 37?C or higher with the help of if and else condition
     if(tempC >= 37){
         result = `You have a fever! Your temperature is ${tempC}.`
     }
     else{
         result = `No fever! Your temperature is ${tempC}.`
     }
  // Use the toFixed() method to format converted temperature in celcius to one decimal place.

  return result;
}