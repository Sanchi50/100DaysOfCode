

const buttonP = document.querySelector("#click");
const textEle = document.querySelector("#text");

 buttonP.addEventListener("click", () => {
    textEle.textContent = "Button is Clicked";

    setTimeout(()=>{
        textEle.textContent = ""; 1000


    }, 2000)
    
});



//Write a program to print 1 after 1 sec, 2 after 2 sec till 5. 
// Complete the given code to get the desired output as shown in the expected output.
function timer() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(
      function () {
        //Write your code here...
        console.log(i)
        }, i * 1000
       //write your code here...);
    );
    console.log("Hello ninjas!");
  }
}
timer();


//setInterval
const textTime =document.querySelector("#time");
let seconds = 0;
textTime.textContent = `${seconds}`
const timerSec = setInterval(()=>{
    seconds++;
    textTime.textContent = `${seconds}`;

    if(seconds>=5){
        clearInterval(timerSec);
    }


}, 1000);

