const inputs = [1,2,4,6,-5,8,-6,-13,-843.984,72364784];
const positives = inputs.filter(nonNegative);
function nonNegative(num){
    return num > 0;
    //jo bhi number 0 se bade hai vo return karega
}
console.log(positives);

const negatives = inputs.filter((num) => num < 0);
console.log(negatives)