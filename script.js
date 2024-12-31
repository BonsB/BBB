function moverandomEl(elm){
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";  // Fixed typo here
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function(e){
    moverandomEl(e.target);  // Fixed typo here (changed moveRandomEl to moverandomEl)
});
