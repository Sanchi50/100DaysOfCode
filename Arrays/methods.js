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