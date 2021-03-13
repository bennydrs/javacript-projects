const closeEyes = document.querySelector('.close-eyes')
const openEyes  = document.querySelector('.open-eyes')

const run = () => {
  closeEyes.classList.toggle('active')
  openEyes.classList.toggle('active')
  setTimeout(run, 1500)
}

run()
