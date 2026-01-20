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

let input = document.getElementById("input");
input.addEventListener("input", function(e){
    //backspace karo to null print hota hai
    //humein null print nahi karana, toh humne kiya agar data is not equal to null to
    //  sab print kar do.
    if(e.data !== null){
    console.log(e.data);
}

});


let sel = document.querySelector("select");
sel.addEventListener("change", function(e){
    console.log(e.target.value);

});


//selected pe eventListener laga ke device ka text change kar rahe hai.
//value likhna zaruri hai html me
let sel1 = document.querySelector("selected");
let device = document.querySelector("#device");
sel.addEventListener("change", function(e){
    device.textContent = `${e.target.value} Device Selected`;
});
