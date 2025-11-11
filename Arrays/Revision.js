let n = 5;
let result = n++ + ++n;
console.log(result);

let count = 5;
if(count-- === 5){
    console.log("Matched");
    }else{
        console.log("Not Matched");
    }

//Early Returns
function getScore(score){
    if(score >=90 && score <=100) return "A";
    if(score >=80 && score <=89) return "B";
    if(score >=70 && score <=79) return "C";
    if(score >=60 && score <=69) return "D";
    if(score >=50 && score <=59) return "E";
    if(score >=30 && score <=32) return "TRY HARDER";
    return "Invalid Marks";

}
console.log(getScore(78));