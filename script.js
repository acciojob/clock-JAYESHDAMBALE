//your JS code here. If required.

let now = new Date();

let currentDateTime = now.toLocaleString();
document.getElementById("timer").textContent = currentDateTime

console.log(`${currentDateTime}`);

// Function to update timer every second
// function updateTimer() {
//   const now = new Date();
//   const currentDateTime = now.toLocaleString(); // correct method
//   document.getElementById("timer").textContent = currentDateTime;
// }

// // call function every 1 second
// setInterval(updateTimer, 1000);

// // call immediately when page loads
// updateTimer();




