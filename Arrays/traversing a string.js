let str = "Javacsript is an amazing language";
let charToFind = "a";

function countChars(str, ch){
    let count = 0;
    for (let i=0; i<str.length;i++){
        if(str.charAt(i) === ch){
            count++;
        }
    }
    console.log(`Occurance of character ${ch} is ${count} times.`)
}

countChars(str, charToFind);


//find words now
let words = str.split(" ");
let count = words.length;
console.log(count);