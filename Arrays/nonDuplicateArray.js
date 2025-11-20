/**You have been provided with two arrays your task is to merge both arrays while removing the duplicate elements from the merged array.
Expected Input
 arr1= [1,2,3,4,5,6,7]
 arr2 = [5,6,7,8,9]
Expected Output
[1,2,3,4,5,6,7,8,9]
Test Cases
Merge arr1 and arr2
Find all the duplicate elements from the new array and keep the order of the elements the same
Return the new array
Note
The order of the elements should be preserved, i.e., The elements of the final array should be in the same order as they were present in the merging array.
            result.push(newArray[i]);
        }
    }
    return result;
}
console.log(mergeArray(arr1,arr2));
//Output : [1,2,4,5,7,3,6,9,0]
 */

arr1 = [1,2,4,5,7];
arr2 = [3,4,6,7,9,0];
function mergeArray(arr1,arr2){
    let newArray = arr1.concat(arr2);
    let result = [];
    for(let i = 0; i<newArray.length; i++){
        if(!result.includes(newArray[i])){
            //ab not ka matlab agar result me ye i nahi hai to push kar de
            //includes = “Kya yeh number already dabbe me hai?”
            // !includes = “Nahi hai? Good, daal do!”
            result.push(newArray[i]);
        }
    }
    return result;
}
console.log(mergeArray(arr1,arr2));
//Output : [1,2,4,5,7,3,6,9,0]