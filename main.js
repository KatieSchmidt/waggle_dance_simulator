"use strict";

//footer consts
const attributes = document.getElementById("footer__attributes");
const attributesButton = document.getElementById("footer__attributes-button");
const attributesSpanSymbol = document.getElementById("icon__attributes-symbol");

//buttons
const animationToggler = document.getElementById("animation__button-toggle");
const closeButton = document.getElementById("animation__button-close");

//divs with keyframes
const animationMover = document.getElementById("animation__mover");
const animationMoverDiv = document.getElementById("animation__mover-div");
const animationImage = document.getElementById("animation__image");
const animationTurner = document.getElementById("animation__turner");
const animationCanvasTurner = document.getElementById(
  "animation__canvas-turner"
);

//keyframe animation divs
const animations = [
  animationMover,
  animationMoverDiv,
  animationTurner,
  animationImage
];

//sections
const animationSection = document.getElementById("section__animation");
const simulationSection = document.getElementById("section__simulation-2");

//flower objects
const simulationFieldFlowerImgs = document.getElementsByClassName(
  "simulation-2__flower-img"
);

//animation functions
function changeSpeedOfAnimation(flowerObject) {
  let totalSeconds =
    flowerObject.distanceFromHive * 2 + flowerObject.distanceFromHive * 2 * 0.2;
  animationMover.style.animationDuration = totalSeconds + "s";
  animationMoverDiv.style.animationDuration = totalSeconds + "s";
  animationTurner.style.animationDuration = totalSeconds + "s";
}

function changeAngleOfSimulation(flowerObject) {
  animationCanvasTurner.style.webkitTransform =
    "rotate(" + flowerObject.angle + "deg)";
  animationCanvasTurner.style.transform =
    "rotate(" + flowerObject.angle + "deg)";
}

function openAnimation() {
  animationSection.classList.remove("section__animation-closed");
  simulationSection.classList.add("section__simulation-2-closed");
}

function closeAnimation() {
  animationSection.classList.add("section__animation-closed");
  simulationSection.classList.remove("section__simulation-2-closed");
}

function toggleAnimations(content) {
  if (
    content.style.animationPlayState === "" ||
    content.style.animationPlayState === "paused" ||
    content.style.WebKitAnimationPlayState === "" ||
    content.style.WebKitAnimationPlayState === "paused"
  ) {
    content.style.animationPlayState = "running";
    content.style.WebKitAnimationPlayState = "running";
  } else {
    content.style.animationPlayState = "paused";
    content.style.WebKitAnimationPlayState = "paused";
  }
}

function stopAnimations() {
  console.log("stopping to paused");
  for (var i = 0; i < animations.length; i++) {
    animations[i].style.animationPlayState = "paused";
    animations[i].style.WebKitAnimationPlayState = "paused";
  }
}

//footer functions
function hideOrShowAttributes() {
  if (attributes.classList.length === 1) {
    attributes.classList.add("footer__attributes-hidden");
    attributesSpanSymbol.innerHTML = "+";
  } else {
    attributes.classList.remove("footer__attributes-hidden");
    attributesSpanSymbol.innerHTML = "-";
  }
}

//flower creation functions
function getDistanceFromHive(lengthOne, lengthTwo) {
  return Math.sqrt(lengthOne * lengthOne + lengthTwo * lengthTwo);
}

function calcDegreesFromXAxis(x, y) {
  return (Math.atan2(y, x) * 180) / Math.PI;
}

function createFlowerObject(e) {
  const classList = e.target.classList;
  let xDist;
  let yDist;

  for (var i = 0; i < classList.length; i++) {
    let classNamePair = classList[i].split("__");

    if (classNamePair[0] === "x-coordinate") {
      if (classNamePair[1] === "center") {
        xDist = 0;
      } else {
        let xCoordPair = classNamePair[1].split("-");
        if (xCoordPair[0] === "positive") {
          xDist = xCoordPair[1] * 1;
        } else {
          xDist = xCoordPair[1] * -1;
        }
      }
    } else if (classNamePair[0] === "y-coordinate") {
      if (classNamePair[1] === "center") {
        yDist = 0;
      } else {
        let yCoordPair = classNamePair[1].split("-");
        if (yCoordPair[0] === "positive") {
          yDist = yCoordPair[1] * 1;
        } else {
          yDist = yCoordPair[1] * -1;
        }
      }
    }
  }
  const currentFlower = new Flower(xDist, yDist);
  return currentFlower;
}

//Flower Object
function Flower(xDistance, yDistance) {
  this.xDistance = xDistance;
  this.yDistance = yDistance;
  this.distanceFromHive = getDistanceFromHive(xDistance, yDistance);
  this.angle = calcDegreesFromXAxis(yDistance, xDistance);
}

//function calls

//this is when you click on any flower in the simulation
//it creates a flower object and then uses that flower's
//attributes to manipulate the animation.
for (var i = 0; i < simulationFieldFlowerImgs.length; i++) {
  simulationFieldFlowerImgs[i].onclick = function(e) {
    let newFlower = createFlowerObject(e);
    openAnimation();
    changeAngleOfSimulation(newFlower);
    changeSpeedOfAnimation(newFlower);
    for (let animation of animations) {
      toggleAnimations(animation);
    }
  };
}

animationToggler.onclick = function() {
  for (var i = 0; i < animations.length; i++) {
    toggleAnimations(animations[i]);
  }
};

closeButton.onclick = function() {
  stopAnimations();
  closeAnimation();
};

attributesButton.onclick = hideOrShowAttributes;
