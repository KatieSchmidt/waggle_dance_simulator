const animationToggler = document.getElementById("animation__button-toggle");

function logIt(e) {
  return console.log(e);
}
animationToggler.onclick = e => {
  console.log("working again");
  logIt(e);
};

console.log("working");
