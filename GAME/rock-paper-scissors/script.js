const userScoreSpan = document.getElementById('user-score')
const computerScoreSpan = document.getElementById('computer-score')
const scoreBoardDiv = document.querySelector('.score-board')
const resultDiv = document.querySelector('.result > p')
const choicesDiv = document.querySelectorAll('.choice')
let userScore = 0
let computerScore = 0

choicesDiv.forEach(choiceDiv => {
  choiceDiv.addEventListener('click', () => {
    game(choiceDiv.id)
  })
})

function getComputerChoice() {
  const choices = ['r', 'p', 's']
  const randomNumber = Math.floor(Math.random() * 3)
  return choices[randomNumber]
}

function game(userChoice) {
  const computerChoice = getComputerChoice()
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice)
      break
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice)
      break
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice)
      break
  }
}

function win(userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice)
  userScore++
  userScoreSpan.innerHTML = userScore
  computerScoreSpan.innerHTML = computerScore
  resultDiv.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`
  userChoiceDiv.classList.add('green-glow')
  setTimeout(() => userChoiceDiv.classList.remove('green-glow'), 500)
}

function lose(userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice)
  computerScore++
  userScoreSpan.innerHTML = userScore
  computerScoreSpan.innerHTML = computerScore
  resultDiv.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost!`
  userChoiceDiv.classList.add('red-glow')
  setTimeout(() => userChoiceDiv.classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice)
  resultDiv.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. it's a draw!`
  userChoiceDiv.classList.add('gray-glow')
  setTimeout(() => userChoiceDiv.classList.remove('gray-glow'), 500);
}

function convertToWord(letter) {
  if (letter === 'r') return "Rock"
  if (letter === 'p') return "Paper"
  return "Scissor"
}
