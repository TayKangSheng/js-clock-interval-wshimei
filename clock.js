document.addEventListener('DOMContentLoaded', function () {
  function startClock () {}
    var now = new Date()
    var seconds = now.getSeconds()
    var minutes = now.getMinutes()
    var hours = now.getHours()

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
  }
  setInterval(startClock, 1000)
})
