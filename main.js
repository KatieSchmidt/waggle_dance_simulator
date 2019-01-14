function getDistanceFromHive(lengthOne, lengthTwo) {
  return Math.sqrt(lengthOne * lengthOne + lengthTwo * lengthTwo);
}

function calcDegreesFromXAxis(x, y) {
  return (Math.atan2(y, x) * 180) / Math.PI;
}

//create a flower
function Flower(xDistance, yDistance, quadrant) {
  this.xDistance = xDistance;
  this.yDistance = yDistance;
  this.quadrant = quadrant;
  this.distanceFromHive = getDistanceFromHive(xDistance, yDistance);
  this.angle = calcDegreesFromXAxis(yDistance, xDistance);
}

const flower_1 = new Flower(-4, 4, 1);

const simulationFieldFlowers = document.getElementsByClassName(
  "simulation__field-flower"
);

function printFlowerInfo(e) {
  let flowerId = e.target.parentElement.id;
  console.log(flowerId);
}

for (var i = 0; i < simulationFieldFlowers.length; i++) {
  simulationFieldFlowers[i].onclick = function(e) {
    printFlowerInfo(e);
  };
}
