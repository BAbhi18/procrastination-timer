let time = 1500; // 25 minutes
let interval;
let streak = parseInt(localStorage.getItem('streak')) || 0;

function updateDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  document.getElementById("timer").innerText =
    `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
  if (interval) return;
  interval = setInterval(() => {
    time--;
    updateDisplay();

    if (time === 0) {
      clearInterval(interval);
      interval = null;
      streak++;
      localStorage.setItem('streak', streak);
      document.getElementById("streak").innerText = streak;
      showMotivation();
      time = 1500; // reset to 25 min
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  time = 1500;
  updateDisplay();
  document.getElementById("message").innerText = "";
}

function showMotivation() {
  const memes = [
    "Keep going, you're doing great!",
    "One step closer to your goals!",
    "Another Pomodoro done. Take a break!",
    "You're on fire!",
    "Discipline > Motivation!"
  ];

  const meme = memes[Math.floor(Math.random() * memes.length)];
  document.getElementById("message").innerText = meme;
}

document.getElementById("streak").innerText = streak;
updateDisplay();
