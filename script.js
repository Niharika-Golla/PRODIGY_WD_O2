let startTime, updatedTime, difference, tInterval;
let savedTime = 0;
let running = 0;

function startTimer() {
  if (!running) {
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    document.getElementById('start').innerText = 'Pause';
    running = 1;
  } else {
    clearInterval(tInterval);
    savedTime = difference;
    document.getElementById('start').innerText = 'Start';
    running = 0;
  }
}

function stopTimer() {
  if (running) {
    clearInterval(tInterval);
    savedTime = difference;
    document.getElementById('start').innerText = 'Resume';
    running = 0;
  }
}

function resetTimer() {
  clearInterval(tInterval);
  savedTime = 0;
  difference = 0;
  running = 0;
  document.getElementById('display').innerText = "00:00:00";
  document.getElementById('start').innerText = 'Start';
  document.getElementById('laps').innerHTML = '';
}

function lapTimer() {
  if (running) {
    let lapTime = document.getElementById('display').innerText;
    let li = document.createElement('li');
    li.innerText = lapTime;
    document.getElementById('laps').appendChild(li);
  }
}

function getShowTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime + savedTime;
  let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((difference / (1000 * 60)) % 60);
  let seconds = Math.floor((difference / 1000) % 60);
  let milliseconds = Math.floor((difference % 1000) / 10);
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
  document.getElementById('display').innerText = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', lapTimer);
