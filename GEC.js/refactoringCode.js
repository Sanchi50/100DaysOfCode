// Do not modify the main function
//Convert the functions present inside main to ES6 standard(i.e. to arrow function)  
function main() {
  let yearData = {};

  //Arrow function
  let createPerYearData = (year, total) => {
    yearData[year] = total;
  };

  //convert it to arrow function
  function printReport() {
    console.log("Print Report");
  }
  let printReport = () => { console.log("Print Report");}

  //convert it to arrow function
  function calculateTotalTillDate(perYearBalance) {
    let total = 0;
    for (let i = 0; i < perYearBalance.length; i++) {
      total += perYearBalance[i];
    }
    return total;
  }

   let calculateTotalTillDate = (perYearBalance) =>{
    let total = 0;
    for(let i=0; i< perYearBalance.length; i++){
        total += perYearBalance[i];
    }
    return total;
   }

  //convert it to arrow function
  function adjustTotalOfYear(year, adjustmentFactor) {
    yearData[year] *= adjustmentFactor;
  }

  let adjustTotalOfYear = (year, adjustmentFactor){
     yearData[year] *= adjustmentFactor;
  }
  
  //Do not modify the code after this
  return {
    createPerYearData,
    printReport,
    calculateTotalTillDate,
    adjustTotalOfYear
  };
}


//IIFE
(function (a,b){
    console.log(a**b);

}) (4,6);

const user = (function () {
     const userData = {
        userName : "John",
        userAge : 20,
    }

    function  getName () {
        console.log(userData.userName);

    }
    function updateAge(age){
        console.log(userData.userAge + age);

    }
    return {getName, updateAge};
})();
console.log(user);

//example2
function main(){
    return (function (){
        console.log("Hello user")
    }) ();
}
const result = main();
//we cant store the IIFE and call it later like the other functions.


//example3
var x = 10;
(function (){
    console.log(x);
})();
//10
//although we cant access the variables declared inside IIFE , but IIFE has scope to the outer scope
//and can access the variables declared in the outer scope.


//example4
var counter = (function(){
    var count = 0;
    return {
        increment : function (){
            count++;
        },
        getCount: function(){
            return count;
        },
    };
})();

counter.increment();
counter.increment();
console.log(counter.getCount());
//2


