/**Refactor the existing code to improve memory efficiency by adding methods to the prototype chain instead of creating copies for each book object.



This will ensure that the methods are shared across all instances of the book constructor function. */


// Instructions:
// 1. Refactor the Book constructor to add the method to the prototype chain instead of creating copies.
// 2. Ensure that isClassic method is accessible to all instances of Book object.


function Book(title, author, publicationYear) {
  this.title = title;
  this.author = author;
  this.publicationYear = publicationYear;


  // Make this function as a prototypal function


    Book.prototype.isClassic = function () {
      const currentYear = 2023;
      const age = currentYear - this.publicationYear;
      if (age >= 50) {
        return "The book is from the classic collection";
      }


      return "The book is not a classic collection book";
    };
}


// Create a few book objects
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1990);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);


// Consoling output
console.log(book1.isClassic()); // Output: 63
console.log(book2.isClassic());
console.log(book3.isClassic()); // Output: 98



-------------------------------------------------***********************************---------------------------------------------------------------

/**In a JavaScript game, you have a basePlayer object that contains common properties and methods for all players. You want to create a heroPlayer object that inherits from basePlayer as its prototype but also has its own unique properties. How should you create this heroPlayer object? */
let hero = Object.create(basePlayer);

//Object.create() is used to create a new object with proto as its prototype. This allows hero to inherit basePlayer properties, and have its own unique ones.