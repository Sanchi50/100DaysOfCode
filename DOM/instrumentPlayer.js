let buttons = document.querySelectorAll(".drum");

// Click event for all buttons
buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let key = this.innerHTML;
    playSound(key);
  });
});

// Keypress event
document.addEventListener("keypress", function (event) {
  playSound(event.key);
});

// Function to play different sounds
function playSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1-28537.mp3").play();
      break;

    case "a":
      new Audio("sounds/tom-2-28541.mp3").play();
      break;

    case "s":
      new Audio("sounds/tom-3-28542.mp3").play();
      break;

    case "d":
      new Audio("sounds/tom-4-28543.mp3").play();
      break;

    case "j":
      new Audio("sounds/snare-28545.mp3").play();
      break;

    case "k":
      new Audio("sounds/crash-28546.mp3").play();
      break;

    case "l":
      new Audio("sounds/kick-bass-28547.mp3").play();
      break;

    default:
      console.log("Wrong key " + key);
  }
}
