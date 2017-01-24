document.addEventListener('DOMContentLoaded', function () {
  var now = new Date()
  var seconds = now.getSeconds()
  var minutes = now.getMinutes()
  var hours = now.getHours()
  // var second = document.getElementById('second')
  // var minute = document.getElementById('minute')
  // var hour = document.getElementById('hour')

  function runningSecond (sec) {
    var degrees = sec / 60 * 360
    second.style.transform = 'rotate(' + degrees + 'deg)'
  }
  runningSecond(seconds)

  function runningMinute (min) {
    var degrees = min / 60 * 360
    minute.style.transform = 'rotate(' + degrees + 'deg)'
  }
  runningMinute(minutes)

  function runningHour (hr) {
    var degrees = hr / 12 * 360
    hour.style.transform = 'rotate(' + degrees + 'deg)'
  }
  runningHour(hours)

  setInterval(function () {
    location = ''
  }, 1000)
})
