class Vehicle {
    wheels = 4;

    constructor(brand) {
        this.brand = brand;
    }

    startEngine() {
        console.log("Engine Started.");
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand); // ✅ parent constructor called
        this.model = model;
    }

    getWheels() {
        // ✅ Access parent class property using "this"
        console.log(`This car has ${this.wheels} wheels.`);
    }
}

const myCar = new Car("Toyota", "Camry");
myCar.getWheels(); // Output: This car has 4 wheels.
myCar.startEngine(); // Output: Engine Started.


/**Explanation (Step-by-step, Hinglish me)

class Vehicle → ye parent class hai.

Property: wheels = 4

Method: startEngine()

class Car extends Vehicle → Car class Vehicle se inherit kar rahi hai.

super(brand) → Parent (Vehicle) ka constructor call karta hai aur this.brand = brand set hota hai.

getWheels() → Child class ka apna method hai jisme hum parent ke property (wheels) ko access karte hain.

Yahaan this.wheels likhne se parent ki property mil jaati hai
(kyunki Car ne Vehicle se inherit kiya hai). */