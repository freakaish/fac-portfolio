let imagCarou = ["1.jpg", "2.jpg", "3.png"];
let num = 0;
let checkOn = 0;

function next() {
  let slider = document.getElementById("slider");
  num++;
  if (num >= imagCarou.length) {
    num = 0
  }
  slider.src = imagCarou[num];
}

function prev() {
  let slider = document.getElementById("slider");
  num--;
  if (num < 0) {
    num = imagCarou.length - 1;
  }
  slider.src = imagCarou[num];
}

function slideshow() {
  if (checkOn == 0) {
    auto = window.setInterval(function() {next()},1000); //can be written without window prefix
    checkOn = 1
  }
}

function pause() {
  if (checkOn == 1)
    clearInterval(auto);
    checkOn = 0
}

window.addEventListener("keydown", function(event) {
  if (event.key == "ArrowLeft") {
    prev();
  } else if (event.key == "ArrowRight") {
    next();
  }
});


window.onload = slideshow();