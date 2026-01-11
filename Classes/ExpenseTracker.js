/**Suppose you are building a personal finance application that helps users track their expenses. You want to ensure that the user's financial information is kept private and secure.




Objective:-


Create a class called ExpenseTracker with the following private properties:

expenses (an array of objects, each representing an expense with properties: name, amount, date)
income (a number representing the user's total income)
The class should have the following private methods:
calculateTotalExpenses() - calculate the total expense using the expenses array and returns the total amount. You may use reduce, for loop, or forEach loop to calculate the total amount of expenses.
The class should have the following public methods:
addExpense(name, amount, date) - adds a new expense to the expenses array in the form of an object.
calculateBalance - Returns the balance left after subtracting all the expenses from the income.This method should internally use #calculateTotalExpenses to compute the total expenses.
The balance is calculated as:
balance = income - totalExpenses;
The class should have a constructor that:
Takes the user's income as a parameter.

Initializes the private property income with the provided value.

Initializes the private property expenses as an empty array.



Expected Input:
const tracker = new ExpenseTracker(5000);
tracker.addExpense("Rent", 1000, "2021-10-01");
tracker.addExpense("Groceries", 500, "2021-10-02");
console.log(tracker.calculateBalance()); 


Expected Output:
3500
 */
//complete the ExpenseTracker class.
// Do not alter the starter code
function main() {
  class ExpenseTracker {
    // Private properties
    #expenses;
    #income;

    constructor(income) {
      this.#income = income;
      this.#expenses = [];
    }

    // Private method
    #calculateTotalExpenses() {
      return this.#expenses.reduce((total, expense) => {
        return total + expense.amount;
      }, 0);
    }

    // Public method
    addExpense(name, amount, date) {
      this.#expenses.push({ name, amount, date });
    }

    // Public method
    calculateBalance() {
      const totalExpenses = this.#calculateTotalExpenses();
      return this.#income - totalExpenses;
    }
  }

  //The class should function accordingly.
  const tracker = new ExpenseTracker(5000);
  tracker.addExpense("Rent", 1000, "2021-10-01");
  tracker.addExpense("Groceries", 500, "2021-10-02");
  console.log(tracker.calculateBalance()); // should output 3500
  return ExpenseTracker;
}
