/**Create two classes, Person and Student, to model individuals and their behaviours. Implement properties and methods to display personalized messages about their identity and academic details.



1. Create a class called Person with the following properties and methods.



Properties:-
name (string)
age (number)
gender (string)


Methods:
speak() - logs a message to the console saying "Hello, my name is [name] and I am [age] years old."


Constructor:
Include a constructor in the class that accepts name, age, and gender as arguments and initializes the corresponding properties.


2. Create a class called Student with the following properties and methods:



Properties:
person (object)
major (string)
gpa (number)


Methods:
study() - logs a message to the console saying "I am studying [major] and my GPA is [gpa]."
speak() - logs a message to the console saying "Hello, my name is [name] and I am [age] years old. I am also a student studying [major]."


Constructor:
Include a constructor in the Student class that accepts a Person object, major, and gpa as arguments. It should initialize the person property with the provided Person object and assign the given values to major and gpa.


Expected Input:-
const person1 = new Person("John",20,"M");

person1.speak();

const stud1 = new Student(person1,"CS",9);

stud1.speak();

stud1.study();


Expected Output:-
Hello, my name is John and I am 20 years old.

Hello, my name is John and I am 20 years old. I am also a student studying CS.

I am studying CS and my GPA is 9.*/

function main() {

  class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }

    speak() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }

  class Student {
    constructor(person, major, gpa) {
      this.person = person;  // storing Person object
      this.major = major;
      this.gpa = gpa;
    }

    study() {
      console.log(`I am studying ${this.major} and my GPA is ${this.gpa}.`);
    }

    speak() {
      console.log(
        `Hello, my name is ${this.person.name} and I am ${this.person.age} years old. I am also a student studying ${this.major}.`
      );
    }
  }

  const person1 = new Person("John", 20, "M");
  person1.speak();

  const stud1 = new Student(person1, "CS", 9);
  stud1.speak();
  stud1.study();

  return { Person, Student };
}

main();
    


//What will be the output:
class Student {
    name;
    sec;
    #rollno;
    constructor(name, sec, rollno){
        this.name = name;
        this.sec = sec;
        this.rollno = rollno;
    }
}

const ram = new Student("Ram", "B", 34356);
console.log(ram);

//Student {name: "Ram", sec: "B" , rollno: 34356 #rollno: undefined}
//It is mandatory to use #while working with the private properties,however it will not
//give an error if we are not using #, instead it will assume `rollno` as a new property
//and assign a value to it.