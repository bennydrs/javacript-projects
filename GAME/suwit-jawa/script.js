const imgComputer = document.querySelector('.img-computer')
const choices = document.querySelectorAll('li img')
let userScore = 0
let computerScore = 0

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const computerChoice = getComputerChoice()
    const userChoice = choice.className
    const result = getResult(computerChoice, userChoice)

    playImgComputer()

    setTimeout(() => {
      imgComputer.setAttribute('src', `img/${computerChoice}.png`)
  
      const info = document.querySelector('.info')
      info.innerHTML = result

      // score
      const scoreComputerEl = document.querySelector('.score-computer');
			const scoreUserEl = document.querySelector('.score-user');
      if (result === 'MENANG!') scoreUserEl.innerHTML = userScore++
      if (result === 'KALAH!') scoreComputerEl.innerHTML = computerScore++
    }, 1000);
  })
})

function getComputerChoice() {
  const comp = Math.random()
  if (comp < 0.34) return 'gajah'
  if (comp >= 0.34 && comp < 0.67) return 'orang'
  return 'semut'
}

function getResult(comp, user) {
  if (user === comp) return 'SERI!'
  if (user === 'gajah') return (comp === 'orang') ? 'MENANG!' : 'KALAH!'
  if (user === 'orang') return (comp === 'gajah') ? 'KALAH!' : 'MENANG!'
  if (user === 'semut') return (comp === 'orang') ? 'KALAH!' : 'MENANG!'
}

// random image computer
function playImgComputer() {
  const img = ['gajah', 'semut', 'orang']
  let i = 0
  const timeStart = new Date().getTime()
  setInterval(() => {
    if (new Date().getTime() - timeStart > 1000) {
      clearInterval() 
      return
    }
    imgComputer.setAttribute('src', `img/${img[i++]}.png`)
    if (i === img.length ) i = 0
  }, 100);
}
