// Prompt user for car speed
const carSpeed = parseInt(prompt("Enter the speed of the car (in km/h):"));

// Define speed limit and points threshold
const speedLimit = 70;
const pointsThreshold = 12;

// Calculate demerit points
let demeritPoints = 0;

if (carSpeed < speedLimit) {
  console.log("Ok");
} else {
  demeritPoints = Math.floor((carSpeed - speedLimit) / 5);

  if (demeritPoints > pointsThreshold) {
    console.log("License suspended");
  } else {
    console.log("Points:", demeritPoints);
  }
}
