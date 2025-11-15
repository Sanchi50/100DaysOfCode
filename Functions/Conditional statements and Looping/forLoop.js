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

//Find the factorial of a number using a for loop.
factorial = 1;
num = 7;
for(let i=1; i<=7; i++){
    factorial = factorial * i;
}
    
console.log(factorial);

//Print all prime numbers between 1 and 100.
let num = 7;
let isPrime = true;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}

//Print all prime numbers between 1 and 100.

for(let num = 2; num<=100;num++){
    isPrime = true;

if(let i=2;i<num;i++){
    if(num % i === 0){
        isPrime = false;
        break;
    }
}
if(isPrime){
    console.log(num);
}
}

//ask the user for a number and print whether each number from 1 to that number is even pr odd.
let num = Number(prompt("Enter a number"));
for(let i=1; i<=num; i++){
    if(i % 2 === 0){
        console.log(`${i} is Even`);
    }else{
        console.log(`${i} is Odd`);
}
}

//Count how many numbers between 1- 100 are divisible by 3& 5

for(let i=1; i<=100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i);
    }
}

//print each number from 1-100 stop when you find first multiple of 7
for(let i=1; i<=100; i++){
    if(i % 7 === 0){
        break;
        
    }
    console.log(i);
}
//skip multiples of 3
for(let i=1; i<=50; i++){
    if(i % 3 === 0)
        continue;
    console.log(i);
}

//print first 5 odd numbers
count = 0;
for(let i=1; i<=20; i++){
    if(i % 2 === 1){
        count++;
        console.log(i);
    }
    if(count === 5)
        break;
    

}