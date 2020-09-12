const passwordEl = document.getElementById('password')
const copyEl = document.getElementById('copy')
const lengthEl = document.getElementById('length')
const upperEl = document.getElementById('upper')
const lowerEl = document.getElementById('lower')
const numberEl = document.getElementById('number')
const symbolEl = document.getElementById('symbol')
const generateEl = document.getElementById('generate')

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '!@#$%^&**()_+-='

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

function getNumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbols() {
  return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword() {
  const len = lengthEl.value

  let password = ''

  if (upperEl.checked) {
    password += getUppercase()
  }
  if (lowerEl.checked) {
    password += getLowercase()
  }
  if (numberEl.checked) {
    password += getNumbers()
  }
  if (symbolEl.checked) {
    password += getSymbols()
  }

  for (let i = password.length; i < len; i++) {
    const x = generateX()
    password += x
  }

  passwordEl.innerText = password
}

function generateX() {
  const xs = []
  if (upperEl.checked) {
    xs.push(getUppercase())
  }
  if (lowerEl.checked) {
    xs.push(getLowercase())
  }
  if (numberEl.checked) {
    xs.push(getNumbers())
  }
  if (symbolEl.checked) {
    xs.push(getSymbols())
  }

  if (xs.length === 0) return ''

  return xs[Math.floor(Math.random() * xs.length)]

}

// click generate
generateEl.addEventListener('click', generatePassword)

// copy password
copyEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea')
  const password = passwordEl.innerText

  if(!password) return;

  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
  alert('password copied')
})
