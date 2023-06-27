const date = "11 Mar 2024";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

function countDown() {
  const endDate = new Date(date);
  const currentDate = new Date();

  const totalSeconds = (endDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 60 / 60 / 24);
  const hours = Math.floor((totalSeconds / 60 / 60) % 24);
  const mins = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds % 60);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

// Function Call.
countDown();

// repeatedly calls countDown function every 1000 millisecond.
setInterval(countDown, 1000);
