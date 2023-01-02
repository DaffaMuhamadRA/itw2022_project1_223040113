// div
const menuToggle = document.querySelector(".menu-toggle input"),
  nav = document.querySelector(".nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// akhir div
// sticky div
window.addEventListener("scroll", function () {
  var header = document.querySelector(".nav");
  header.classList.toggle("sticky", window.scrollY > 20);
});
// ----------------
// circular progress
// cp1
let circularProgress = document.querySelector(".circular-progress"),
  progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
  progressEndValue = 80,
  speed = 60;

let progress = setInterval(() => {
  progressStartValue++;

  progressValue.textContent = `${progressStartValue}%`;
  circularProgress.style.background = `conic-gradient(purple ${
    progressStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (progressStartValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
// akhir circular progress
