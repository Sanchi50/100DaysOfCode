//Print 1 to 50 using a for loop.
for(let i=1; i<=50 ; i++){
    console.log(i);
}

//Print even numbers between 1 to 20.
for(let i=1; i<=20; i++){
    if(i % 2 === 0){
        console.log(i);
    };
}

// Print the table of 5 (5, 10, 15...)
for(let i=5; i<=50; i+=5){
    console.log(i);
}

//Print each character of a string
let str = "Full-Stack Developer";
for(let i=0; i<=str.length;i++){
    console.log(str[i]);
}

//Find the sum of numbers from 1 to n using for loop.
let n = 20;
let sum = 0;
for(let i=1; i<=n; i++){
    sum = sum + i;

}
console.log("sum =" sum);

//Count how many vowels are in a given string.
let str1 = "Full-Stack Developer";
let count = 0;
for(i=0; i<str.length; i++){
    let ch = str[i].toLowerCase();
    if(ch==="a" || ch==="e" || ch==="i" || ch==="o" || ch==="u"){
        count++;
    }
}

//Print the elements of a list using a for loop.
let arr = [10, 20, 30, 40];
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

//Print numbers from 1 to 50, but skip multiples of 3.
let num = 50;
for(let i=1; i<=50; i++){
    if(num % 3 === 0){
        continue;
    }
}
console.log(i);

//print number in reverse order
for(let i=10; i>0; i--){
    console.log(i)
}

//Print the reverse of a string using a for loop.
let srt3 = "JavaScript";
console.log(split("").reverse("").join(""));

