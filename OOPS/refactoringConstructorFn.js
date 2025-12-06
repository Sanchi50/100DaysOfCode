/**You are given some starter code where a constructor function, Gadget, is incorrectly implemented using an arrow function, and the describeGadget() method also does not follow the recommended approach for object-oriented access.



Your task is to:

Refactor the Gadget constructor so that it works correctly with the new keyword.
Use the regular function keyword instead of an arrow function to define the constructor.
Fix the describeGadget() method inside the constructor so that it returns a string in the following exact format:
This gadget is a {type} from {brand}."
Example:

const gadget1 = new Gadget("Sony", "laptop"); console.log(gadget1.describeGadget()); //Output: "This gadget is a laptop from Sony."



The describeGadget() method must:


Use this.brand and this.type to refer to the instance’s properties.
Be implemented as a regular function, not as an arrow function. (Arrow functions do not have their own this and can lead to incorrect behaviour when used for instance methods.)
function main(){
  //Refactor the gadget constructor function
const Gadget = (brand, type) => {
  this.brand = brand;
  this.type = type;

  // Refactor the describeGadget() method here
  this.describeGadget = ()=> {
    return `This gadget is a ${type} from ${brand}.`;
  };

 */

  function main(){
  //Refactor the gadget constructor function
function Gadget (brand, type) {
  this.brand = brand;
  this.type = type;

  // Refactor the describeGadget() method here
  this.describeGadget = function () {
    return `This gadget is a ${this.type} from ${this.brand}.`;
  };
};
  const gadget1 = new Gadget("sony","laptop");
  console.log(gadget1.describeGadget());
  // Do not modify the return statement
 return Gadget; 
}
main();

