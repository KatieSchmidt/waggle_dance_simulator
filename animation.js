const animationToggler = document.getElementById("animation__button-toggle");
const animationMover = document.getElementById("animation__mover");
const animationMoverDiv = document.getElementById("animation__mover-div");
const animationImage = document.getElementById("animation__image");
const animationTurner = document.getElementById("animation__turner");

function toggleAnimations(content) {
  if (
    content.style.animationPlayState === "" ||
    content.style.animationPlayState === "paused"
  ) {
    content.style.animationPlayState = "running";
    content.style.WebKitAnimationPlayState = "running";
  } else {
    content.style.animationPlayState = "paused";
    content.style.WebkitAnimationPlayState = "paused";
  }
}

animationToggler.onclick = () => {
  toggleAnimations(animationMover);
  toggleAnimations(animationMoverDiv);
  toggleAnimations(animationImage);
  toggleAnimations(animationTurner);
};
