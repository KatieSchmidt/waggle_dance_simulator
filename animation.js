const animationToggler = document.getElementById("animation__button-toggle");
const animationMover = document.getElementById("animation__mover");
const animationMoverDiv = document.getElementById("animation__mover-div");
const animationImage = document.getElementById("animation__image");
const animationTurner = document.getElementById("animation__turner");
const closeButton = document.getElementById("animation__button-close");
const animationSection = document.getElementById("section__animation");
const animationCanvasTurner = document.getElementById(
  "animation__canvas-turner"
);
const simulationSection = document.getElementById("section__simulation-2");

function changeAngleOfSimulation(flowerObject) {
  animationCanvasTurner.style.webkitTransform = `rotate(${
    flowerObject.angle
  }deg)`;
}

function openOrCloseAnimation() {
  if (animationSection.classList.length > 1) {
    animationSection.classList.remove("section__animation-closed");
    simulationSection.classList.add("section__simulation-2-closed");
  } else {
    animationSection.classList.add("section__animation-closed");
    simulationSection.classList.remove("section__simulation-2-closed");
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
