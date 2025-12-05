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
 */

function increaseSalaries(employees) {
  return employees.map(emp => {
    let increment = 0;

    if (emp.department === "sales") {
      increment = 0.10;
    } else if (emp.department === "engineering") {
      increment = 0.15;
    } else {
      increment = 0.05;
    }

    const newSalary = (emp.salary * (1 + increment)).toFixed(1);

    // Return a new object, don’t mutate the original
    return {
      ...emp,
      salary: Number(newSalary)
    };
  });
}
