/**You run a shopping mall and store customer list you use a nested object consisting 
 * of different objects. Create a function calculatePrice which should take an object
 *  as its parameter. It should be able to calculate the total price after taking price
 *  and quantity into account for each product.
Expected Input
const goods = {
apple: { price: 150, quantity: 2 },
banana: { price: 75, quantity: 3 },
orange: { price: 125, quantity: 1 }
}
Expected Output
650 */

const goods = {
  apple: { price: 150, quantity: 2 },
  banana: { price: 75, quantity: 3 },
  orange: { price: 125, quantity: 1 },
};

function calculatePrice(goods){
    let totalPrice = 0;

    for(let item in goods){
        const product = goods[item];
        totalPrice += product.price * product.quantity;
        //totalPrice = totalPrice + (product.price * product.quantity);
    }

    return totalPrice;
}
console.log(calculatePrice(goods));


/**1. Loop ke hisaab se:
Pehli baar: "apple"
Doosri baar: "banana"
Teesri baar: "orange"
So assume pehli iteration me item = "apple" goods[item] evaluate hota hai 
goods["apple"] ka matlab: { price: 150, quantity: 2 }
Wo pura object memory se uthkar aa jaata hai.Wo object product naam ke variable me store ho jata hai
After line runs:
let product = goods[item];
product = { price: 150, quantity: 2 }
Ab tum product.price aur product.quantity access kar sakte ho.
Next line totalPrice += product.price * product.quantity;
which means
totalPrice = totalPrice + (product.price * product.quantity);
totalPrice = 0 + (150 * 2) = 300
second iteration
item = "banana"
product = goods["banana"]
product = { price: 75, quantity: 3 }
totalPrice += 75 * 3
totalPrice = 300 + 225 = 525
third iteration
item = "orange"
product = goods["orange"]
product = { price: 125, quantity: 1 }
totalPrice += 125 * 1
totalPrice = 525 + 125 = 650



 */