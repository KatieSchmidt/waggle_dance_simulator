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

  for (className of classList) {
    let classNamePair = className.split("__");

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

const simulationFieldFlowerImgs = document.getElementsByClassName(
  "simulation-2__flower-img"
);

for (var i = 0; i < simulationFieldFlowerImgs.length; i++) {
  simulationFieldFlowerImgs[i].onclick = e => {
    let newFlower = createFlowerObject(e);
    console.log(newFlower);
  };
}
