const { run } = require("node:test");

// Function to calculate demerit points based on speed
function calculateDemeritPoints() {
    // Get speed input value
    const speedInput = document.getElementById('speed');
    const speed = parseInt(speedInput.value);

    // If speed is less than 70, no demerit points
    if (speed < 70) {
        document.getElementById('result').textContent = "Ok";
        return;
    }

    // Calculate demerit points for every 5 km/h above the speed limit (70)
    const points = Math.floor((speed - 70) / 5);

    // If points exceed 12, license is suspended
    if (points > 12) {
        document.getElementById('result').textContent = "License suspended";
        return;
    }

    document.getElementById('result').textContent = `Points: ${points}`;
}
run();