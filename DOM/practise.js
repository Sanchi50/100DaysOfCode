// let changeText = document.getElementById("hulu");
// changeText.textContent = "Welcome Coder!"
// changeText.style.color = "red";
// let goall = document.querySelector(".goal");
// goall.textContent = "Get a JOB";
// goall.style.fontStyle = "italic";

// // let lis = document.querySelectorAll("li");
// // lis.forEach(function (val)  {
// //     console.log(val.textContent)
// // });

// // or we can also do it like this
// let lis = document.querySelectorAll("li");
// for(let i=0; i<lis.length; i++){
//     console.log(lis[i].textContent);
// }


// let parag = document.querySelectorAll("p");
// parag[1].innerHTML = "<b>Updated</b> by Javascript";

// //remove the disabled attribute from a button
// let btn = document.querySelector("button");
// btn.removeAttribute("disabled");


// //create a new list item <li>node.js</li> and add it to the end of the list.
// //phele ul ko pakdo
// let ull = document.querySelector("ul");
// //usme <li> create karo new element
// let li = document.createElement("li")
// //kya likhna hai vaha vo likho
// li.textContent = "Noje js";
// //append karo
// ull.appendChild(li);

// //create a new img element with a placeholder source and add it to the top of a div.
// let img = document.createElement("img");
// img.setAttribute("src", 
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpAh63HncAuJOC6TxWkGLYpS0WwNXswz9MA&s");

//     document.querySelector("div").prepend(img);

//     let ul1 = document.querySelector("ul");
//     let li1 = document.querySelector("li");
//     li1.remove();


    //add a highlight class to every even item in a list
     let cl = document.querySelectorAll("ul li:nth-child(2n)")
     //ul hai uske li ka nth child ka 2n (even vale) 2 likhte to second select hota bas
  console.log(cl);
  cl.forEach(function(elem){
    elem.classList.add("highlight");
  });


  //set the font size of all p elements to 18px using .style
  let p = document.querySelectorAll("p");
  p.forEach(function(elem) {
   elem.style.fontSize = "28px";
  });

  //eventListener
  btn.addEventListener("click" , function(){
    p.style.color ="red";
  })
  
