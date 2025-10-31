function Person(name){
    this.name = name;
}
Person.prototype.greet = function (){
    console.log(`Hello, my name is ${this.name}`);
};

function Employee(name, position){
    Person.call(this, name);
    this.position = position;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.greet = function(){
    console.log(`Hello, I'm an employee. My name is ${this.name}`);
};

const john = new Employee("john", "Manager");
john.greet();


//Output
//Hello, I'm an employee.My name is John.
//The following code perform the method overriding, so when we call the greet method
//it will be of Employee's class and not from Person's class.
