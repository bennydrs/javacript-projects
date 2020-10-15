const indicatorEl = document.querySelector('.indicator')
const input = document.querySelector('input')
const weakEl = document.querySelector('.weak')
const mediumEl = document.querySelector('.medium')
const strongEl = document.querySelector('.strong')
const textEl = document.querySelector('.text')
const showBtn = document.querySelector('.showBtn')
let regExpWeak = /[a-z]/
let regExpMedium = /\d+/
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/

function trigger() {
  const value = input.value
  if (value != '') {
    indicatorEl.style.display = 'block'
    indicatorEl.style.display = 'flex'
    if ( value.length <= 3 && (value.match(regExpWeak) || value.match(regExpMedium) || value.match(regExpStrong)) ) no = 1
    if ( value.length >= 6 && ((value.match(regExpWeak) && value.match(regExpMedium)) || (value.match(regExpMedium) && value.match(regExpStrong)) || (value.match(regExpWeak) && value.match(regExpStrong))) ) no = 2
    if ( value.length >= 6 && value.match(regExpWeak) && value.match(regExpMedium) && value.match(regExpStrong)) no = 3
    if (no === 1) {
      weakEl.classList.add('active')
      textEl.style.display = 'block'
      textEl.textContent = 'Your password is too weak'
      textEl.classList.add('weak')
    }
    if (no === 2) {
      mediumEl.classList.add('active')
      textEl.textContent = 'Your password is medium'
      textEl.classList.add('medium')
    } else {
      mediumEl.classList.remove('active')
      textEl.classList.remove('medium')
    }
    if (no === 3) {
      mediumEl.classList.add('active')
      strongEl.classList.add('active')
      textEl.textContent = 'Your password is strong'
      textEl.classList.add('strong')
    } else {
      strongEl.classList.remove('active')
      textEl.classList.remove('strong')
    }
    showBtn.style.display = 'block'
    showBtn.onclick = () => {
      if (input.type == "password"){
        input.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "#23ad5c";
      } else {
        input.type = "password";
        showBtn.textContent = "SHOW";
        showBtn.style.color = "#000";
      }
    }
  } else {
    indicatorEl.style.display = 'none'
    textEl.style.display = 'none'
    showBtn.style.display = 'none'
  }
}
