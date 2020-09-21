function clock() {
  const dayNameEl = document.getElementById('dayname')
  const monthEl = document.getElementById('month')
  const dateEl = document.getElementById('date')
  const yearEl = document.getElementById('year')

  const hoursEl = document.getElementById('hour')
  const minutesEl = document.getElementById('minutes')
  const secondsEl = document.getElementById('seconds')

  const dayName = new Date().getDay()
  const month = new Date().getMonth()
  const date = new Date().getDate()
  const year = new Date().getFullYear()

  const months = ['January', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  const weeks = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']

  const hour = new Date().getHours()
  const minutes = new Date().getMinutes()
  const seconds = new Date().getSeconds()

  dayNameEl.innerHTML = weeks[dayName]
  monthEl.innerHTML = months[month]
  dateEl.innerHTML = formatTime(date)
  yearEl.innerHTML = year

  hoursEl.innerHTML = formatTime(hour)
  minutesEl.innerHTML = formatTime(minutes)
  secondsEl.innerHTML = formatTime(seconds)

  setInterval(clock, 1000)
}

function formatTime(time) {
  return time < 10 ? (`0${time}`) : time
}

clock()
