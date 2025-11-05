function updateTimer() {
	let now = new Date().toLocaleString();
	document.getElementById("timer").textContent = now;
}

setInterval(updateTimer,1000);

updateTimer();

