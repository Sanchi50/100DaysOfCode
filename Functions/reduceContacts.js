/**Suppose you are working on a contact application that stores contact details in a list of objects. Each contact object has the name and company information of a contact, as shown below:

const contacts = [
{ name: "Alice", company: "ABC Inc." },
{ name: "Bob", company: "XYZ Corp." },
{ name: "Charlie", company: "ABC Inc." }
]



Objectives:
Create a function with name mapContactsToCompanies that accepts an array of contacts and returns an object with the company names as the keys and an array of the corresponding contact names as the values.
Use the reduce method to get the expected output.
Ensure that each company name in the output object maps to an array containing all the contact names associated with that company.


Input:
const contacts = [
{ name: "Alice", company: "ABC Inc." },
{ name: "Bob", company: "XYZ Corp." },
{ name: "Charlie", company: "ABC Inc." }
]
mapContactsToCompanies(contacts)


Output:

{
"ABC Inc.": [
"Alice",
"Charlie"
],
"XYZ Corp.": [
"Bob"
]
}


Hint:
Here's a basic example of how the reduce method works with dummy data:

const exampleArray = [1, 2, 3, 4]; 
const result = exampleArray.reduce(function(accumulator, currentValue) {
accumulator.push(currentValue * 2);
return accumulator;
}, {});
In the above example, the result will be [2, 4, 6, 8].

const contacts = [
  { name: "Alice", company: "ABC Inc." },
  { name: "Bob", company: "XYZ Corp." },
  { name: "Charlie", company: "ABC Inc." }
];

function mapContactsToCompanies(contacts) {
  // The goal is to return an object where each "key" is a company name, and the "value" is an array of names of people who work at that company.

  // Use the reduce method to iterate through each contact in the array.

 */

  const contacts = [
  { name: "Alice", company: "ABC Inc." },
  { name: "Bob", company: "XYZ Corp." },
  { name: "Charlie", company: "ABC Inc." }
];

function mapContactsToCompanies(contacts) {
  // The goal is to return an object where each "key" is a company name, and the "value" is an array of names of people who work at that company.

  // Use the reduce method to iterate through each contact in the array.

  // The reduce method takes two arguments:
  // 1. A callback function (with two parameters: the accumulator (obj) and the current item (contact)).
  // 2. An initial value for the accumulator (in this case, an empty object {}).
    return contacts.reduce((acc, contact) => {
        const company = contact.company;
        const name = contact.name;

        if (!acc[company]) {
            acc[company] = [];
        }
        acc[company].push(name);

        return acc;
    }, {});

  // For each contact:
  // 1. Check if the company name already exists as a key in the object.
  // 2. If it doesn't exist, create a new array for that company.
  // 3. Add the contact name to the array of names for that company
  // 4. Return the object(accumulator) after processing all contacts.

  // Implement your function logic below and return the object as described.
}
