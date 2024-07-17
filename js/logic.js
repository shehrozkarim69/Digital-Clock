function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    document.querySelector(".hrs").textContent = hours;
    document.querySelector(".mins").textContent = minutes;
    document.querySelector(".secs").textContent = seconds;
  }
  // Initial call to set the clock
  updateClock();
  // Update the clock every second
  setInterval(updateClock, 1000);
  