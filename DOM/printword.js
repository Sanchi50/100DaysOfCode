//screen ko window kehte hai aur eventListener window pe lagayenge
//if space press kiye to uss case me screen pe spc dikhna chahiye else jo keypress kar rahe
//vo print hona chahiye
let h1 = document.querySelector("h1");
window.addEventListener("keydown", function(det){
    if(det.key === " "){
        h1.textContent = "SPC";
    } 
    else{
    h1.textContent = det.key;
    }

});