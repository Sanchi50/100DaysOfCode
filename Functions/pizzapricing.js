/**You are tasked with creating a program to calculate the price of a pizza based on its size, quantity and selected toppings.




Objectives


Expected Input
Size: large
Toppings: ['bacon', 'cheese']
Quantity: 1
Expected Output
Total Price: 15.00
Solution:
Formula: (Price of the Size + No. of toppings * 1.5) * Quantity => (12 + 2*1.5)* 1 = 15   


Hints:
Use a JavaScript object to store the base prices for each size.
The final price should include the base price plus the total cost of the toppings, multiplied by the quantity.
Remember to use .toFixed(2) to ensure the result is formatted to two decimal places.
    };
  };
}

// Example:
const finalPrice = pizzaPricing("large")(["bacon", "cheese"])(1);
console.log(finalPrice); // 15.00

 */
// Function to calculate the price of a pizza based on size, toppings, and quantity
function pizzaPricing(size) {
  
  // Base prices for each pizza size
  const basePrices = {
    small: 8,
    medium: 10,
    large: 12
  };

  // Return a function (curried) that takes toppings
  return function(toppings) {

    // Return another function that takes quantity
    return function(quantity) {

      const toppingCost = toppings.length * 1.5;
      const total = (basePrices[size] + toppingCost) * quantity;

      return total.toFixed(2);
    };
  };
}

// Example:
const finalPrice = pizzaPricing("large")(["bacon", "cheese"])(1);
console.log(finalPrice); // 15.00
