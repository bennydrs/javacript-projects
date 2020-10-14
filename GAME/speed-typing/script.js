window.addEventListener('load', init)

// levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
}

// append levels data and option to html
const levelSelect = document.getElementById('level')
for(level in levels) {
  const opt = document.createElement('option')
  opt.value = levels[level]
  opt.innerHTML = level

  levelSelect.appendChild(opt)
}

// select level
let levelSelected
levelSelect.addEventListener('change', e => {
  levelSelected = e.target.value
  levelInt = parseInt(levelSelected)
  seconds.innerHTML = levelInt
  currentLevel = levelInt
})

// to change lavel
let currentLevel = levels.easy

let time = currentLevel
let score = 0
let isPlaying

const seconds = document.getElementById('seconds')
const currentWord = document.getElementById('current-word')
const wordInput = document.getElementById('word-input')
const message = document.getElementById('message')
const timeDisplay = document.getElementById('time')
const scoreDisplay = document.getElementById('score')

const words = [
  'river',
  'fruit',
  'food',
  'statue',
  'java',
  'runaway',
  'joke',
  'developer',
  'born',
  'programming',
  'echo',
  'space',
  'console',
  'inherit',
  'definition',
  'master',
  'javascript',
  'siblings',
  'coding',
  'script',
  'style',
  'movie'
]

function init() {
  // show number of seconds
  seconds.innerHTML = currentLevel
  // load word from array
  showWord(words)
  // start matching on word input
  wordInput.addEventListener('input', startMatch)
  // countdown every second
  setInterval(countDown, 1000)
  // check game status
  setInterval(checkStatus, 50)
}

// start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true
    time = currentLevel + 1
    showWord(words)
    wordInput.value = ''
    score++
  }
  // if score is -1, display 0
  if (score === -1){
    scoreDisplay.innerHTML = 0
  } else {
    scoreDisplay.innerHTML = score
  }
}

// match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = `<span class='correct'>Correct!!!</span>`
    return true
  } else {
    message.innerHTML = ''
    return false
  }
}

// show random word
function showWord(words) {
  // random array index
  const randIndex = Math.floor(Math.random() * words.length)
  // output
  currentWord.innerHTML = words[randIndex]
}

// countdown timer
function countDown() {
  if (time > 0)
    time--
  else
    isPlaying = false

  // show time
  timeDisplay.innerHTML = time
}

// check status
function checkStatus() {
  if(!isPlaying && time === 0) {
    message.innerHTML = `<span class='game-over'>Game Over!!!</span>`
    score = -1
  }
}
