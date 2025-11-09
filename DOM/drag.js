let input = document.querySelector("input");

input.addEventListener("input" , function(name){
  if(name.data !== null){
    console.log(name.data);
  }
});

//text change karna kuch select karne pe
let fruits = document.querySelector("select");
let device = document.querySelector("#device");

fruits.addEventListener("change", function (dets){
  device.textContent = `${dets.target.value}Fruits selected`;
});