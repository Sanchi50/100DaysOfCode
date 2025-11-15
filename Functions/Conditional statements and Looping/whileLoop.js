//1 to 10 print karo using a while loop.
let i=1;
while(i <=10){
    console.log(i);
    i++;
}

//10 to 1 reverse print using a while loop.
let i = 10;
while(i>=1){
    console.log(i);
    i--;
}

//even no. from 1-20
let i = 1;
while(i <=20){
    if(i % 2 === 0){
        console.log(i);

    }
    
    i++;
}

//Sum of numbers 1 to 50 calculate karo using while.
//Sum of numbers 1 to 50 calculate karo using while.

let sum = 0;
let i = 1;
while(i <=50){
    //sum = sum + i;
    sum +=i;
    //console.log(sum);

i++;
}
console.log(sum);


//Kisi number ka table print karo (for example: 7 ka table).
//Kisi number ka table print karo (for example: 7 ka table).
let i = 1;
while(i<= 70){
    if(i % 7 === 0){
        console.log(i);
    }
    i++;
}

//User se number lo, uska factorial while loop se nikaalo.
//let Input = Number(prompt("Enter your number here"));
let Input = 5;
let factors = 1;
let i = 1;
while(i <=Input){
    factors *=i;
    
    i++;
}
console.log("factorial is:", factors);

//Kisi number ke digits count karo using while.
let num = 23456;
let count = 0;
while(num > 0){
    num = Math.floor(num/10);
    count ++;
}
console.log(count);

/** demo num = 4567
Loop 1: Math.floor(4567/10) = 456
Loop 2: Math.floor(456/10)  = 45
Loop 3: Math.floor(45/10)   = 4
Loop 4: Math.floor(4/10)    = 0
 */







//DO-WHILE LOOP
do{
    let i = 1;
    
}while(i <=10){
    console.log(i);
    i++;
}

//Print odd numbers to 1-15 using while loop
let i=1;
while(i<=15){
    if(i % 2 === 1){
console.log(i);

    }i++;
    
}

//Print even numbers from 2 to 20 using do-while.
let i = 1;

do {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
} while (i <= 20);

//or
let i = 2;

do {
    console.log(i);
    i += 2;   // next even number
} while (i <= 20);
