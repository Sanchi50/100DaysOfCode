const Dog = class {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} says woof!`);
    }
}
const cat = class{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} says meow!`);
    }
}
function createAnimal (type){
    if (type === "dog"){
        return new Dog("Buddy");
    }else if (type === "cat"){
        return new cat("whiskers");
        
    }else {
        return null;
    }
}
const d = createAnimal("dog");
d.speak();
//Output = Buddy says woof!

//It is allowed to define classes as class expression so that it can beused only when
//required.