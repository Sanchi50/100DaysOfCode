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
console.log(book3.isClassic()); // Output: 98










function Person(name) {
  this.name = name;
}

Person.prototype.age = 30;

const john = new Person("John");
john.__proto__.age = 40;

console.log(john.age);
console.log(Person.prototype.age);

let parent = { name: "parent", children: [] };

let child1 = Object.create(parent);
child1.name = "child1";

child1.children.push(child1.name);




//prototype
function Game(name, platform) {
  this.name = name;
  this.platform = platform;
}

const fifa = new Game("FIFA 23", "PlayStation");

console.log(fifa.__proto__ === Game.prototype);
console.log(fifa.__proto__.__proto__ === Object.prototype);
//true true



//que
function Galaxy(name) {
  this.name = name;
}

const milkyWay = new Galaxy("Milky Way");
console.log(milkyWay.__proto__.__proto__.__proto__);
//null






function Person(name) {
  this.name = name;
}

Person.prototype.age = 30;

const john = new Person("John");
john.__proto__.age = 40;

console.log(john.age);
console.log(Person.prototype.age);
