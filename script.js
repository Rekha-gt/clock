let sec = document.getElementById("sec");
let min = document.getElementById("mins");
let hr = document.getElementById("hrs");

function displayTime() {
  let date = new Date();

  // Getting hours, minutes, seconds from date
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30 * hh + mm / 2;
  let mRotation = 6 * mm;
  let sRotation = 6 * ss;

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;
}

// Digital clock function
function updateDigitalClock() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let ampmText = h >= 12 ? "PM" : "AM";

  if (h > 12) {
    h = h - 12;
  }
  if (h == 0) {
    h = 12; // Fix for midnight case
  }

  // Formatting to always show two digits
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("hour").innerHTML = h;
  document.getElementById("minutes").innerHTML = m;
  document.getElementById("seconds").innerHTML = s;
  document.getElementById("ampm").innerHTML = ampmText;
}

// Run both functions every second
setInterval(displayTime, 1000);
setInterval(updateDigitalClock, 1000);
