/**Suppose you have a list of employees in a company, and each employee is represented as an object with the following properties:


"id" - a unique identifier for the employee
"name" - the employee's name
"department" - the department the employee works in
"salary" - the employee's current salary




Objectives:

You want to make a modification to the list of employees to reflect a recent company-wide salary increase. You have been provided with the following information:
1. Salaries for employees in the "sales" department should be increased by 10%.
2. Salaries for employees in the "engineering" department should be increased by 15%.
3. Salaries for employees in all other departments should be increased by 5%.
4. You need to write a function "increaseSalaries" that takes an array of employee objects and returns a new array of employee objects where each employee's salary has been updated based on their department. The original array of employees should be left unchanged.
5. The salary should be converted to one decimal place using toFixed().
6. Use the map function to iterate over every object in the array.


// Function to increase salaries based on the department
function increaseSalaries(employeeList) {
  return employeeList.map(emp => {
    let updatedSalary = emp.salary;

    if (emp.department === "sales") {
      updatedSalary *= 1.10;              // 10% hike
    } else if (emp.department === "engineering") {
      updatedSalary *= 1.15;              // 15% hike
    } else {

 */
// Function to increase salaries based on the department
function increaseSalaries(employeeList) {
  return employeeList.map(emp => {
    let updatedSalary = emp.salary;

    if (emp.department === "sales") {
      updatedSalary *= 1.10;              // 10% hike
    } else if (emp.department === "engineering") {
      updatedSalary *= 1.15;              // 15% hike
    } else {
      updatedSalary *= 1.05;              // 5% hike for everyone else
    }

    return {
      ...emp,
      salary: updatedSalary.toFixed(1)     // one decimal place
    };
  });
}

// Example usage
const updatedEmployees = increaseSalaries(employees);
console.log(updatedEmployees);
