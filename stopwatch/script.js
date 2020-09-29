function stopwatch() {
  const minutesEl = document.getElementById('minutes')
  const secondsEl = document.getElementById('seconds')
  const tensEl = document.getElementById('tens')
  const btnStart = document.getElementById('btn-start')
  const btnStop = document.getElementById('btn-stop')
  const btnReset = document.getElementById('btn-reset')
  let minutes = 00
  let seconds = 00
  let tens = 00
  let interval

  btnStart.addEventListener('click', () => {
    clearInterval(interval)
    btnStart.disabled = true
    btnStop.disabled = false
    interval = setInterval(startTimer, 10)
  })

  btnStop.addEventListener('click', () => {
    clearInterval(interval);
    btnStart.disabled = false
    btnStop.disabled = true
  })

  btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    minutes = "00"
    tensEl.innerHTML = tens;
    secondsEl.innerHTML = seconds;
    btnStart.disabled = false
    btnStop.disabled = true
  })

  function startTimer() {
    tens++

    if(tens < 9) {
      tensEl.innerHTML = '0' + tens
    }

    if (tens > 9) {
      tensEl.innerHTML = tens
    }

    if(tens > 99) {
      seconds++
      secondsEl.innerHTML = '0' + seconds
      tens = 0
      tensEl.innerHTML = '0' + 0
    }

    if(seconds > 59) {
      minutes++
      minutesEl.innerHTML = '0' + minutes
      seconds = 0
      secondsEl.innerHTML = '0' + 0
    }

    if (seconds > 9){
      secondsEl.innerHTML = seconds;
    }
  }


}

stopwatch()
