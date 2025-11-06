//Ek hi unique ID hoti hai, vohi return karega
let getTitle = document.getElementById("title");
console.log(title);

//Jitni classes hai vo sab return karega
let getClass = document.getElementsByClassName("text");
console.log(getClass);


//only gives the first Element.
//FOR CLASS = (.className)
let queryClass = document.querySelector(".text");
console.log(queryClass);

//FOR ID = (#IDname) ye sirf querySelector(#) me lagta hai.
//first element return karta hai 
let getID = document.querySelector("#title");
console.log(getID);

//ye sab return karega jitne bhi hai uss name se
let getAllClass = document.querySelectorAll(".text");
console.log(getAllClass);

//jo first .btn milega vo return karega
let buttonClass = document.querySelector(".btn");
console.log(buttonClass);

//---------------------------------------************************-----------------------------------------------------------

let h2 = document.querySelector("#change");
console.log(h2);

//innerHTML : change ho jata hai text bhi
h2.innerHTML = "Sanchi kar legi tu";
console.dir(h2);
//issey bold itlaic banana ho to
h2.innerHTML = "<b><i>Kar ke dikhaa hai iss baar </i></b>";
console.dir(h2);
// matlab yaha text ke saath html bhi change hua.

//textContent se text hange kar sakte hai
h2.innerContent = "Do it girl";
console.dir(h2);

//innerText se bhi same text change karta hai
h2.innerText = "GO FOR IT";
console.dir(h2);

//ab isme hidden ko true kare to
h2.hidden =  true;
//vo html se hide ho jayega, nahi dikhega, ye humne JS ke through kiya.


//------------------------------************************-------------------------------------

//Attributes Manipulation
//phele href pe kuch nahi tha (empty value thi) 
//1. select konsa tag change/manipulate karna hai
let a = document.querySelector("a");
//change karna hai isme toh value put karna hai toh
a.href = "https://www.google.com/search?q=google&oq=google&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyEwgBEC4YgwEYxwEYsQMY0QMYgAQyDAgCECMYJxiABBiKBTIKCAMQABixAxiABDINCAQQABiDARixAxiABDIKCAUQABixAxiABDINCAYQABiDARixAxiABDIHCAcQABiPAjIHCAgQABiPAtIBCTE4NjVqMGoxNagCCLACAfEFS86Gpv08lcg&sourceid=chrome&ie=UTF-8"
console.dir(a);


//setAttribute(name, value)
//name = kiski value dena hai
//value = jo value dena hai
a.setAttribute("href", "https://evierose.in/?srsltid=AfmBOoqHbqG9Yw-e9zaQxfpzyjnG-v1E0n-hWJs7khCE_4ARY8USjCsL");
console.log(a);

//---------------------------------***************-------------------------------
//setAttribute()- image ka change karna
let img = document.querySelector("img");
console.log(img);
img.setAttribute("src", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/f8/5c/05/picture-lake.jpg?w=900&h=500&s=1");
console.log(img);


//Update an Existing attribute
//<p1> ka class="text" se hata ke "highlight dena hai"
let para = document.querySelector("p");
console.log(para);
para.setAttribute("class", "highlight");
console.log(para);
//p1 ka class highlight ho gaya

//---------------------------------------*********************************--------------------------------------------

//getAttribute() HTML me jo attribute ki value set hai vo deta hai
let get = document.querySelector("a");
get.getAttribute("href");
console.log(get);
//------------------------------------********************-----------------------------------------

//removeAttribute()
let a2 = document.querySelectorAll("a")[1];
console.log(a2);
console.log(a2.removeAttribute("href"));

//Multiple attributes remove karne ka direct shortcut nahi hai.
//Par tum ek chhoti array + loop se ek line me sab hata sakte ho.

["href", "target"].forEach(attr => link.removeAttribute(attr));
/**1) ["href", "target"]

Ye array literal hai jisme do strings hain: "href" aur "target".

Matlab: humne ek list banaayi attributes ki jo remove karne hain.

2) .forEach(...)

forEach array method hai jo array ke har element pe ek function chalata hai.

Yahan iska kaam: list ka har item lo (pehle "href", phir "target") aur diye gaye function ko call karo.

3) attr => link.removeAttribute(attr)

Ye arrow function hai — short form for:
Ye arrow function hai — short form for:

function(attr) {
  link.removeAttribute(attr);
}


attr parameter ke through current array item milta hai (pehle "href", phir "target").

link.removeAttribute(attr) DOM element link se woh attribute hata deta hai.

Agar attribute nahi mila toh koi error nahi — bas harmless null/nothing.
4) Execution flow (step-by-step run)

JavaScript array banata hai: ["href", "target"].

forEach start hota hai.

Iteration 1:

attr = "href".

link.removeAttribute("href") chalti hai → <a> element se href nikal jaata hai.

Iteration 2:

attr = "target".

link.removeAttribute("target") chalti hai → target attribute nikal jaata hai.

forEach finish. Kaam ho gaya.

5) Result — Before / After

Before

<a id="link" href="https://example.com" target="_blank">Visit</a>


After

<a id="link">Visit</a> */


//-------------------------------------------***********************------------------------------------------



