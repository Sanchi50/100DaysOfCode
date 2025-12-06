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
