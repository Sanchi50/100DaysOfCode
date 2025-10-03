/*
 Find Duplicate 
 Design a JavaScript function named findDuplicate to identify and extract all duplicate elements from an array.
 The function should accept an array as a parameter and create a new array containing only the duplicate elements
 found in the input array. The resulting array should be returned.

 Expected Input
 [4,56,54,3,56,36,54]
 Expected Output
 [56,54]

 Test Cases
 Find all the duplicate elements in the array
 Create a new array consisting of all the duplicate elements
 Return the new array 
 */

let arr = [4, 2, 34, 4, 1, 12, 1, 4];
function findDuplicate(arr) {  
    let duplicateArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
               if(arr[i] === arr[j] && !duplicateArr.includes(arr[i])){
                duplicateArr.push(arr[i]);
            }
        }
    }
    return duplicateArr;
}

console.log(findDuplicate(arr)); 
        









