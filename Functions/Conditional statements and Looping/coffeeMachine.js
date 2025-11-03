/**Create a program that takes a customer's coffee order as input, converts the input to lowercase, and uses a switch statement to handle different coffee types. The program should calculate the price based on the selected coffee type and store the result in a variable named " answer."



The coffee types and their prices are as follows:

Regular: $2.50
Latte: $3.50
Cappuccino: $4.00
Espresso: $2.50


Expected Input
regular
Expected Output
$2.50


Expected Input
ESPRESSO
Expected Output
$2.50


Test Cases


Convert the input coffee type to lowercase using the .toLowerCase() method.

Use a switch statement to match the coffee type and store the corresponding price in the answer variable.

If the input does not match any coffee type, store "Invalid coffee type." in the answer.

function coffeeMachine(coffeeType) {
  let answer;

  // Convert the input coffee type to lowercase using the toLowerCase() method.
    coffeeeType = coffeeType.toLowerCase();
  
  // Use a switch statement to handle different coffee types and store the price in 'answer'.
  // Example:
  // case "regular":
  //     answer = "$2.50";

 */
function coffeeMachine(coffeeType) {
  let answer;

  // Convert the input coffee type to lowercase using the toLowerCase() method.
  coffeeType = coffeeType.toLowerCase();
    
  // Use a switch statement to handle different coffee types and store the price in 'answer'.
  // Example:
  // case "regular":
  //     answer = "$2.50";
  //     break;
    
              
       switch (coffeeType) {
        case "regular":
            answer = "$2.50";
            break;
        case "latte":
            answer = "$3.50";
            break;
        case "cappuccino":
            answer = "$4.00";
            break;
        case "espresso":
            answer = "$2.50";
            break;
        default:
            answer = "Invalid coffee type.";
    }
  // Add a default case to handle any invalid coffee types.

  return answer;
}
