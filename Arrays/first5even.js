//get first 5 even numbers from an array
const inputs = [11,32,12,45,65,94,7,78,10,100,131,67,81,92,53];
const evenNumbers = [];
for (let i of inputs){
    if(i % 2 !== 0){
        continue;

    }
    evenNumbers.push(i);
    if(evenNumbers.length === 5){
        break;
    }
    console.log(evenNumbers);
    //yaha sirf 4 print honge qk break ke baad console kar rahehai to last vala print nahi hoga.
}
console.log(evenNumbers);