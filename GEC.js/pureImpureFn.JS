/**Impure Function */
function removeVowels(obj){
    obj.Value = obj.value.replace(/[aeiou]/gi, "");
}
let strObj = { value: "Hello World" };
removeVowels(strObj);
console.log(strObj.value);





//CallBack Function
function greet(wish){
    console.log(`${wish()}, Welcome to the world of JavaScript`);
}

function sayHi(){
    return "Hi!";
}

function sayHello(){
    return "Hello!";
}
function goodMorning(){
    return "GoodMorning";
}

greet(sayHi);
greet(sayHello);
greet(goodMorning);



//Example5

function doSomething(call){
    call();
}

doSomething(() => {
    console.log("Hello!");
})

function greet(){
    console.log("greet");
}
doSomething(greet);

doSomething(function(){
    console.log("Hello!");
})