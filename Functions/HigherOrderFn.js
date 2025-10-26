function performOperation(operation){
    switch (operation){
        case "sum" :
            return function (...numbers){
                return numbers.reduce((acc, cur) => acc + cur, 0);
            };
            case "product" :
                return function (...numbers){
                    return numbers.reduce((acc, cur) => acc * cur, 1);
                };
                default :
                return function(){
                    return "Invalid operation";
                };
    }
}

const Op1 = performOperation("sum");
const Op2 = performOperation("product");

const result1 = Op1(2,3,4);
const result2 = Op2(2,3,4,5);

console.log(result1);
console.log(result2);