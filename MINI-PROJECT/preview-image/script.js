const wrapper = document.querySelector('.wrapper')
const fileName = document.querySelector('.file-name')
const defaultBtn = document.querySelector('#default-btn')
const customBtn = document.querySelector('#custom-btn')
const cancelBtn = document.querySelector('#cancel-btn')
const img = document.querySelector('img')
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_]+$/

customBtn.addEventListener('click', () => {
  defaultBtnActive()
})

function defaultBtnActive() {
  defaultBtn.click()
}

defaultBtn.addEventListener('change', e => {
  const file = e.target.files[0]
  const value = e.target.value
  if (file) {
    const reader = new FileReader()
    reader.onload = function() {
      const result = reader.result
      img.src = result
      wrapper.classList.add('active')
    }
    cancelBtn.addEventListener('click', () => {
      img.src = ''
      wrapper.classList.remove('active')
    })
    reader.readAsDataURL(file)
  }
  if (value) {
    let valueStore = value.match(regExp)
    fileName.textContent = valueStore
  }
})
