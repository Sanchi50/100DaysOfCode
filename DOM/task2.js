//HTML me ek button banao.
//Click karne par alert me likh kar aana chahiye: "I did it!"
//done with onclick

//Ek <p> tag likho jisme kuch text ho.
//Ek button banao jo click hone par us paragraph ka text console me print kare.
let para = document.getElementById("para");
function showText(){
    console.log(para.textContent);
}


//Ek div banao (100x100px ka box).
//Button click hote hi uska background red ho jaye.
let div = document.querySelector("div");
function changeClr(){
    div.style.color = "red";
}


//Ek <h2> likho: "Hello World"
//Button click par text change karke: "Kaam ho gaya boss" kar do.
let h2 = document.querySelector("h2");
function changeTxt(){
    h2.textContent = "Kaam ho gaya boss";
}

let btn = document.querySelector("button")[3];
function clicked(){
console.log("somebody clicked me");
}