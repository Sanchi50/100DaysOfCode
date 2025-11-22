let arr = [10, 20, 30].includes(20);
console.log(arr);//true

let arr2 = [10, 20, 30].includes("20");
console.log(arr2);//false(strict checking)

let arr3 = ["a", "b", "c", "d"].includes("c", 3);

console.log(arr3)//false

let fd = "frontend".includes("end");
console.log(fd);//true

let arr4 = [1, 2, NaN].includes(NaN);
console.log(arr4);//true

let arr5 = [true, false].includes(false, 1);
console.log(arr5);//true

["JS", "React", "Node"].includes("js");// false (strict check, case sensitive)

let arr6 = [5, 6, 7, 8].includes(5, 1);
console.log(arr6);//false (starts checking from index no. 1)

//indexOf
["x", "y", "z", "x"].indexOf("x", 1);
//returns 3

"banana".indexOf("na");
//2

"banana".indexOf("na", 3);
//4

[100, 200, 300, 200].indexOf(200, 2);
//3

["a", "b", "c"].indexOf("d");
//-1

"mississippi".indexOf("is");
//1

[true, false, true].indexOf(true, 1);
//2

"abcabcabc".indexOf("abc", 4);
//6


//slice()
[10, 20, 30, 40, 50].slice(1, 4)
//[20,30,40]

[1, 2, 3, 4, 5].slice(2)
[3,4,5]

["a", "b", "c", "d"].slice(0, 2)
//["a", "b"]

["x", "y", "z"].slice(-2)
//["y", "z"]

[100, 200, 300, 400].slice(-3, -1)
//[200,300]

"hello".slice(1, 4)
//ell

[9, 8, 7, 6].slice(1, 3)
//8,7

[5, 6, 7, 8, 9].slice(3, 10)
//8,9 (array khatam ho chuka hai, mai end tak de dunga)

//splice()
const arr1 = [10, 20, 30, 40];
arr.splice(1, 2);
//[10,40]= arr
//return [20,30]

const arr11 = ["a", "b", "c", "d"];
arr.splice(2, 0, "X");
//["a" , "b", "X" ,"c", "d"]

const arr111 = [5, 6, 7, 8];
arr.splice(1, 1, 99, 100);
//new array = [5,99,100,7,8]
//return [6]

const ar1 = [1, 2, 3, 4, 5];
ar1.splice(3, 10);
//(value 10) matlab jitna mile sab nikaal do 3rd index se
//new = [1,2,3]
//return = [4,5]

const ar2 = [100, 200, 300];
ar2.splice(0, 0, 999);
//new = [999,100,200,300]


const ar3 = ["x", "y", "z"];
ar3.splice(1, 1, "A", "B");
//["x", "A", "B", "z"]


const ar4 = [9, 8, 7];
ar4.splice(-1, 1);
//[9,7]
//return[8]

const ar5 = [1, 2, 3, 4];
ar5.splice(2, 2, "X");
//[1,2,"X"]
//[3,4]
