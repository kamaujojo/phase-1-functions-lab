// index.js

function distanceFromHqInBlocks(location) {
  
    const headquarters = 42;
   
    return Math.abs(location - headquarters);
}

function distanceFromHqInFeet(location) {
    const block = 264; // Each block is 264 feet
    const blocks = distanceFromHqInBlocks(location); // Reusing the previously defined function
    return blocks * block;
}
function distanceTravelledInFeet(start, destination) {
    const block = 264; // Each block is 264 feet
    const blocks = Math.abs(destination - start); // Calculate blocks travelled
    return blocks * block; 
}
f
    function calculatesFarePrice(start, destination) {
        const distanceInFeet = distanceTravelledInFeet(start, destination);
        const baseFare = 0;
        const ratePerFoot = 0.02;
   
        } else if (distanceInFeet <= 2500) {
          return flatFare; // Flat fare for distance between 2000 and 2500 feet
        }
        43-34*256