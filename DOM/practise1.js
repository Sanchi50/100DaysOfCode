//make p2 green on clicking the button
let button = document.getElementById("btn");
let para = document.getElementById("para2");

button.addEventListener("click", function(){
    para.style.color = "green";
});

let btn3 = document.getElementById("btn3");
let para3 = document.getElementById("green");

btn3.addEventListener("dblclick", function(){
    para3.classList.toggle("green");
});


//SHOW/HIDE
hidden.addEventListener("click", function(){
    hide.classList.toggle("hide");
});

//we can make .classes in CSS and use it to manipulate DOM in js.
//DARK MODE TOGGLE
dark.addEventListener("click", function(){
    document.body.classList.toggle("dark");
});
/**document
Poora webpage.

.body
Webpage ka main body. Jo sab kuch dikhta hai, text, buttons, etc.

.classList
Us element par lagi hui saari CSS classes ki list.

.toggle("dark")
Agar dark class lagi hui hai → hata do
Agar nahi lagi hui → laga do */

para2.addEventListener("click", function(){
    para2.classList.toggle("active");
});

remove.addEventListener("click", ()=>{
    document.getElementById("rem").remove();
});

let mv = document.querySelector(".mv");

mv.addEventListener("mouseover", ()=>{
    mv.style.color = "red";
})
