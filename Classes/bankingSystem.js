/**Suppose you have been hired to develop a simple banking application that should include basic user account functionality. The application should allow users to create an account, deposit and withdraw funds, and check their current balance.



Objective:


1- Create a class called Account with the following private properties:

accountNumber (string): A unique identifier for the account.
balance (number): The current balance of the account, initialized to 0.
Include a constructor in the class that accepts the account number as an argument and initializes the accountNumber property with this value and balance to 0.



2- Implement the following functionalities:

Create a getter method called getbalance to allow users to access the current account balance.
Create a setter method called setbalance to allow users to update the balance. This setter should only accept positive values. If a negative value is provided, it should return the message: "Please enter a positive value for the balance".


3- Create a method called deposit() that accepts a number as an argument. The method should add the argument value to the balance property.



4- Create a method called withdraw() that accepts a number as an argument. The method should subtract the argument value from the balance property. If the argument value is greater than the current balance, the method should return the message "Insufficient balance".



Expected Input:
const myAccount = new Account("1234567890");
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(myAccount.getbalance); 


Expected Output:
300


Hints:
A getter is a special method that allows you to access the private properties of a class safely. For example, the getbalance method in this problem retrieves the value of the private balance property.
get propertyName() {
// return the value of the property
}
A setter is used to modify private properties while ensuring certain validations or rules are enforced. For example, the setbalance method ensures that only positive values are assigned to the balance property.
set propertyName(value) {
// perform validation before assigning value
}
To use the getter and setter in your code:
Call the getter like a property: myAccount.getbalance.
Call the setter like a property and assign a value: myAccount.setbalance = 100.
function main() {
    //create your class here with the name Account with all the private properties and getter and setter
  
    const myAccount = new Account("1234567890");
    myAccount.deposit(500);
    myAccount.withdraw(200);
    console.log(myAccount.getbalance); // output: 300
    //Do not modify the return statement
    return Account;
  }

 */
function main() {
  // Creating the Account class
  class Account {
    // Private properties
    #accountNumber;
    #balance;

    // Constructor to initialize account number and balance
    constructor(accountNumber) {
      this.#accountNumber = accountNumber;
      this.#balance = 0; // initial balance is 0
    }

    // Getter to access the private balance safely
    get getbalance() {
      return this.#balance;
    }

    // Setter to update balance with validation
    set setbalance(value) {
      if (value < 0) {
        return "Please enter a positive value for the balance";
      }
      this.#balance = value;
    }

    // Method to deposit money into the account
    deposit(amount) {
      this.#balance += amount;
    }

    // Method to withdraw money from the account
    withdraw(amount) {
      // Check if sufficient balance is available
      if (amount > this.#balance) {
        return "Insufficient balance";
      }
      this.#balance -= amount;
    }
  }

  // Creating a new account object
  const myAccount = new Account("1234567890");

  // Depositing money
  myAccount.deposit(500);

  // Withdrawing money
  myAccount.withdraw(200);

  // Printing current balance
  console.log(myAccount.getbalance); // Output: 300

  // Do not modify this return
  return Account;
}

main();
