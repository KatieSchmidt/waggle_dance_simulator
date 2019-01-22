const animationToggler = document.getElementById("animation__button-toggle");
const animationMover = document.getElementById("animation__mover");
const animationMoverDiv = document.getElementById("animation__mover-div");
const animationImage = document.getElementById("animation__image");
const animationTurner = document.getElementById("animation__turner");
const closeButton = document.getElementById("animation__button-close");
const animationSection = document.getElementById("section__animation");

function openOrCloseAnimation() {
  if (animationSection.classList.length > 1) {
    animationSection.classList.remove("section__animation-closed");
  } else {
    animationSection.classList.add("section__animation-closed");
  }
}

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

closeButton.onclick = () => {
  openOrCloseAnimation();
};
