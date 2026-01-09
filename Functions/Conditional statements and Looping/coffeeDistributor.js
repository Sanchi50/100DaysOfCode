/**Suppose you're working on a project where you need to process a list of customer orders for a coffee shop.




Requirements


Requirement 1:

Each order is represented as an object with the following properties:

"orderNumber" - a unique number identifying the order
"items" - an array of objects representing the items ordered, where each item has a "name" and a "price" property
"discountCode" - a string representing a discount code for the order (optional)


Requirement 2:

You need to write a function "totalOrderValue" that takes an array of order objects and a callback function as its input and returns the total value of all orders combined after applying any applicable discounts.
The callback function, named "applyDiscount" should take two parameters: a discount code and total order value for a particular object, and applies the discount based on the following condition.
If the discount code is "COFFEELOVER," apply a 10% discount.

If the discount code is “TEALOVER,” apply a 20% discount.
There may be cases where there is no discount code present in the order object.



Note:

You must use the map and reduce function to iterate over every object and to get the total value.
The final ans should be converted to 2 decimal places with the help of the toFixed() method.


Calculations:
Order 1:
Items:
Cappuccino: $3.50
Chocolate Croissant: $2.50
Total: $3.50 + $2.50 = $6.00
Discount Code: None
Total after discount: $6.00
Order 2:
Items:
Latte: $4.00
Blueberry Muffin: $2.75
Total: $4.00 + $2.75 = $6.75
Discount Code: "COFFEELOVER"
Discount: 10% of $6.75 = $6.75 * 0.10 = $0.675
Total after discount: $6.75 - $0.675 = $6.075 ≈ $6.08 (rounded to 2 decimal places)
Grand Total: $6.00 + $6.08 = $12.08 (final output is rounded to 2 decimal places)
function totalOrderValue(orders, applyDiscount) {
  const totals = orders.map(order => {
    const baseTotal = order.items.reduce((sum, item) => sum + item.price, 0);
    return order.discountCode
      ? applyDiscount(order.discountCode, baseTotal)
      : baseTotal;
  });

  return totals.reduce((acc, val) => acc + val, 0).toFixed(2);
}

 */

function totalOrderValue(orders, applyDiscount) {
  const totals = orders.map(order => {
    const baseTotal = order.items.reduce((sum, item) => sum + item.price, 0);
    return order.discountCode
      ? applyDiscount(order.discountCode, baseTotal)
      : baseTotal;
  });

  return totals.reduce((acc, val) => acc + val, 0).toFixed(2);
}

const applyDiscount = (code, total) => {
  const discounts = {
    COFFEELOVER: 0.10,
    TEALOVER: 0.20
  };

  return discounts[code] ? total * (1 - discounts[code]) : total;
};

// Example Run
console.log(totalOrderValue(orders, applyDiscount)); // "12.08"
