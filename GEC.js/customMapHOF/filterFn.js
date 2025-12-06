const inputs = [1,2,4,6,-5,8,-6,-13,-843.984,72364784];
const positives = inputs.filter(nonNegative);
function nonNegative(num){
    return num > 0;
    //jo bhi number 0 se bade hai vo return karega
}
console.log(positives);

const negatives = inputs.filter((num) => num < 0);
console.log(negatives)


const numbers = [1,2,3,4,5,2,4,2];

const filterNumbers = numbers.filter((element, index, array)=>{
    return array.indexOf(element) === index;
});
console.log(filterNumbers);
//output [1,2,3,4,5]
//the code removes duplicate from array numbers using filter method
//it checks if the current index of each element matches its first occurence(indexOf(element) === index),
//ensuring only the first appeacrnce is included in the output.duplicate value are removed.