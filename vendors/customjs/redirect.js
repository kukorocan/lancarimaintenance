// Countdown timer for redirecting to another URL after several seconds

var seconds = 4 // seconds for HTML
var foo // variable for clearInterval() function

function redirect() {
  document.location.href = 'https://welcome.lancari.com/'
}

function updateSecs() {
  document.getElementById('seconds').innerHTML = seconds
  seconds--
  if (seconds == -1) {
    clearInterval(foo)
    redirect()
  }
}

function countdownTimer() {
  foo = setInterval(function () {
    updateSecs()
  }, 1000)
}

countdownTimer()
