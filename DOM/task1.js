1.//Select the heading of a page by ID and change its text to You Can Do It!.
let idh1 = document.getElementById("youCan");
idh1.textContent = "You Can Do It";
console.log(idh1)



2.//select all the <li> elements and print their texts using a loop
//1 select all the li tags
 let lis = document.querySelectorAll("li");
 for(i=0; i< lis.length; i++){
    console.log(lis[i].textContent);
 }

 //or we can solve it like this too
 /**let lis = document.querySelectorAll("li");
 lis.forEach(function (val){
    console.log(val.textContent);
 });*/


 3.//When should you use textContent instead of innerText
 //textContent
 /**Tumhe fast chahiye (ye performance ka Red Bull hai).
Tumhe exact text chahiye, jo HTML me likha hai, even if it’s hidden.
Tum styling/CSS ke emotional drama me interest nahi rakhte.
Tumhe line breaks aur spacing jaisi cheezein as-it-is chahiye. */

//innerText
/**Tumhe wahi text chahiye jo screen pe actually visible hai.
CSS ne jo hide kiya (like display: none) usko ignore karna hai.
Tum layout-dependent result chahte ho (slow + moody behaviour). */

//Example
/**<style>
  #demo { display:none; }
</style>
<p id="demo">Hello World</p>

console.log(demo.textContent);  // "Hello World"
console.log(demo.innerText);    // ""  (kyunki element visible hi nahi hai)*/

4.//select a <p> and replace its content with:
//<b>Updated b </b> by javascript.
let para = document.querySelector("p");
para.innerHTML = "<b>Updated</b> by Javascript."

5.//how do you get src of an image using javascript
let img = document.querySelector("img");
console.log(img.src);
//ek aur tarika hai iska
console.log(img.getAttribute("src"));

6.//now change the image to another one
document.querySelector("img").setAttribute("src", "https://www.shutterstock.com/shutterstock/photos/2286554497/display_1500/stock-photo-random-pictures-cute-and-funny-2286554497.jpg" )

7.//select the link and update its href
let aLink = document.querySelector("a")
aLink.setAttribute("href", "https://classroom.codingninjas.com/app/classroom/me/36809/content/995594/offering/17464784");
//ek aur tarika hai
aLink.href = "https://classroom.codingninjas.com/app/classroom/me/36809/content/995594/offering/17464784"