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

const animations = [
  animationMover,
  animationMoverDiv,
  animationTurner,
  animationImage
];

function changeSpeedOfAnimation(flowerObject) {
  let totalSeconds = flowerObject.distanceFromHive * 2 + 2;
  animationMover.style.animationDuration = `${totalSeconds}s`;
  animationMoverDiv.style.animationDuration = `${totalSeconds}s`;
  animationTurner.style.animationDuration = `${totalSeconds}s`;
}

function changeAngleOfSimulation(flowerObject) {
  animationCanvasTurner.style.webkitTransform = `rotate(${
    flowerObject.angle
  }deg)`;
}

function openAnimation() {
  animationSection.classList.remove("section__animation-closed");
  simulationSection.classList.add("section__simulation-2-closed");
}

function closeAnimation() {
  animationSection.classList.add("section__animation-closed");
  simulationSection.classList.remove("section__simulation-2-closed");
}

function startAnimations(animationList) {
  for (animation of animationList) {
    animation.style.animationPlayState = "running";
    animation.style.WebKitAnimationPlayState = "running";
  }
}

function stopAnimations(animationList) {
  for (animation of animationList) {
    animation.style.animationPlayState = "paused";
    animation.style.WebKitAnimationPlayState = "paused";
  }
}

//this turns the animations on and off
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
  for (animation of animations) {
    toggleAnimations(animation);
  }
};

closeButton.onclick = () => {
  closeAnimation();
  stopAnimations(animations);
};
