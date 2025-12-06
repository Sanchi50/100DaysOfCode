function movie(title, year){
    const movieObj = {
        title : title,
        year : year, 
        getDetails (){
            console.log(`
                Title :${this.title}\n 
                Year : ${this.year}`);
        },
    };
    return movieObj;
}

const movie1 = movie("Harry Potter", 2008);
console.log(movie1);

const movie2 = movie("Avatar", 2018);
console.log(movie2);


//Constructor Function

function Movie(title, year){
    this.title = title;
    this.year = year;

    this.getDetails = function(){
        //yaha function lagaye hai kyunki abhi hum object nahi bana rahe
        // aur getdetails yaha ek variable hai
        console.log(`
                Title :${this.title}\n 
                Year : ${this.year}`);

    }
}
//new keyword
const movie3 = new Movie("Avangers", 2018);
console.log(movie3);
movie3.getDetails();



//Example2 
function Game(name, platform){
    this.name = name;
    this.platform = platform;


}

const fifa = new Game("Fifa 23", "Playstation");
console.log(fifa.__proto__ === Game.prototype);
console.log(fifa.__proto__.__proto__ === Object.prototype);

//True True
//The fifa object's __proto__ points to Game.prototype , being aninstance of game, also all
// objects in js inheriently derived from Object.prototype making second fifa.__proto__.proto__ equal to Object.prototype.


//example3
function Galaxy(name){
    this.name = name;
}

const milkyWay = new Galaxy("Milky Way");
console.log(milkyWay.__proto__.proto__.proto__ );
//null
//milkyWay = galaxy.prototype = Object.prototype(top of chain) iska prototypr hota hai null.


//example4
let obj = {a:1, b:2};
console.log(Object.getPrototypeOf(obj) === Object.prototype);
//true

//example5
function Person(name){
    this.name = name;
}

Person.prototype.age = 30;
const john = new Person("John");

john.__proto__.age = 40;
console.log(john.age);
console.log(Person.prototype.age);
//40 40