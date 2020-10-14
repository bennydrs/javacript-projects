const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelector('.score')
const moles = document.querySelectorAll('.mole')
const startBtn = document.getElementById('start')
const sound = document.getElementById('sound')

let lastHole
let timeUp = false
let score = 0

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length)
  const hole = holes[idx]
  if (hole === lastHole) {
    return randomHole(holes)
  }
  lastHole = hole
  return hole
}

// munculkan tikus
function peep() {
  const time = randomTime(300, 1000)
  const hole = randomHole(holes)
  hole.classList.add('up')
  setTimeout(() => {
    hole.classList.remove('up')
    if (!timeUp) peep()
  }, time);
}

// mulai game
function startGame() {
  startBtn.innerHTML = 'Playing..'
  startBtn.disabled = true
  scoreBoard.textContent = 0
  timeUp = false
  score = 0
  peep()
  setTimeout(() => {
    timeUp = true
    startBtn.innerHTML = 'Start!'
    startBtn.disabled = false
  }, 10000);
}

// pukul tikus
function bonk(e) {
  if (!e.isTrusted) return
  score++
  sound.play()
  this.parentNode.classList.remove('up')
  scoreBoard.textContent = score
}

moles.forEach(mole => mole.addEventListener('click', bonk))
