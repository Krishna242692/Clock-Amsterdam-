function updateClock() {
  // 1. Create a new Date object for the current time
  const now = new Date();

  // 2. Define options for formatting the time for Amsterdam
  const options = {
    timeZone: 'Europe/Amsterdam',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false // Use 24-hour format
  };

  // 3. Format the time using the specified options
  const timeString = new Intl.DateTimeFormat('en-GB', options).format(now);

  // 4. Find the clock element and update its text
  document.getElementById('digital-clock').textContent = timeString;
}

// Update the clock right away when the page loads
updateClock();

// Then, update the clock again every second to keep it current
setInterval(updateClock, 1000);
