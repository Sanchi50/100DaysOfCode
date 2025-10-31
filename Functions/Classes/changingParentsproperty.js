function Animal(){
    this.sound = "Animal sound";
}

function Cat(){
    Animal.call(this);

}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.makeSound = function(){
    console.log(this.sound);
};

const cat = new Cat();
cat.sound = "Meow";
cat.makeSound();


//Meow
//The cat constructor function inherits the sound property from Animal through
//Animal.call(this), which allows cat instances to access the sound property.