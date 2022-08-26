const miliseconds = document.querySelector("#ms");
const seconds = document.querySelector("#seconds");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
let counter = 0;
let secondCounter = 0;
let interval;

startBtn.addEventListener("click", function () {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});
stopBtn.addEventListener("click", function () {
  clearInterval(interval);
});
resetBtn.addEventListener("click", function () {
  clearInterval(interval);
  seconds.innerHTML = "00";
  miliseconds.innerHTML = "00";
});
function startTimer() {
  counter++;
  if (counter < 9) {
    miliseconds.innerHTML = "0" + counter;
  }
  if (counter > 9) {
    miliseconds.innerHTML = counter;
  }
  if (counter > 99) {
    counter = 0;
    secondCounter++;
    seconds.innerHTML = "0" + secondCounter;
  }
  if (secondCounter > 9) {
    seconds.innerHTML = secondCounter;
  }
}
