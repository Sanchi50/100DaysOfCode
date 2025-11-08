////Add a highlight class to every even item in a list
let li = document.querySelectorAll("ul li:nth-child(2n)");

li.forEach(function (elem) {
    elem.classList.add("highlight");
});


let p = document.querySelectorAll("p");
p.forEach(function(eleme){
    eleme.style.fontSize = "28px";
});

//Removing heading on the click of a button
let btn = document.querySelector("button");
btn.addEventListener("click", () =>
    document.querySelector("h1").remove()
);
